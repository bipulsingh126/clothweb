import { v2 as cloudnary } from 'cloudinary';
import { productModel } from '../models/productModels.js';

//add product controller

const addProduct = async (req, res) => {
   try {
      const { name, description, price, category, subCategory, sizes, bestseller } = req.body;
      const image1 = req.files.image1 && req.files.image1[0]
      const image2 = req.files.image2 && req.files.image2[0]
      const image3 = req.files.image3 && req.files.image3[0]
      const image4 = req.files.image4 && req.files.image4[0]

      const images = [image1, image2, image3, image4].filter((item) => item !== undefined)
      let imagesUrl = await Promise.all(
         images.map(async (item) => {
            let result = await cloudnary.uploader.upload(item.path, { resource_type: 'image' });
            return result.secure_url
         })
      )

      const productData = {
         name,
         description,
         price: Number(price),
         category,
         subCategory,
         sizes: JSON.parse(sizes),
         bestseller: bestseller === 'true' ? true : false,
         image: imagesUrl,
         date: Date.now()
      }
      const product = new productModel(productData);
      await product.save();

      res.status(200).json({
         success: true,
         message: 'Product added successfully',
         data: product,
      })

   } catch (error) {
      console.log(error);
      res.status(500).json({
         success: false,
         message: error.message,
      })

   }
}


//list products

const listProducts = async (req, res) => {
   try {
      const products = await productModel.find({});
      res.status(200).json({
         success: true,
         data: products,
      })
   } catch (error) {
      console.log(error);
      res.status(500).json({
         success: false,
         message: error.message,
      })

   }
}


// removeing product 

const removeProduct = async (req, res) => {
   try {
      await productModel.findByIdAndDelete(req.body.id);
      res.status(200).json({
         success: true,
         message: 'Product removed successfully',
      })
   } catch (error) {
      console.log(error);
      res.status(500).json({
         success: false,
         message: error.message,
      })
   }
}



//single product

const singleProduct = async (req, res) => {
   try {
      const { productId } = req.body;
      const product = await productModel.findById(productId);
      res.status(200).json({
         success: true,
         message: "product find success",
         product
      })
   } catch (error) {
      console.log(error);
      res.status(500).json({
         success: false,
         message: error.message,
      })

   }
}





export { removeProduct, singleProduct, listProducts, addProduct };