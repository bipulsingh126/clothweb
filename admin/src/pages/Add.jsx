import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
const Add = ({ token }) => {

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Men');
  const [subCategory, setSubCategory] = useState('Topwear');
  const [bestseller, setBestseller] = useState(false);

  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory); // Make sure this is included
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      // Only append images if they exist
      if (image1) formData.append('image1', image1);
      if (image2) formData.append('image2', image2);
      if (image3) formData.append('image3', image3);
      if (image4) formData.append('image4', image4);

      const response = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } });

      if (response.data.message) {
        toast.success(response.data.message);
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2'>Upload Image</p>
        <div className='flex gap-2'>
          <label htmlFor="image1">
            <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
            <input onChange={(e) => setImage1(e.target.files[0])} type="file" id='image1' hidden />
          </label>
          <label htmlFor="image2">
            <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
            <input onChange={(e) => setImage2(e.target.files[0])} type="file" id='image2' hidden />
          </label>
          <label htmlFor="image3">
            <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
            <input onChange={(e) => setImage3(e.target.files[0])} type="file" id='image3' hidden />
          </label>
          <label htmlFor="image3">
            <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
            <input onChange={(e) => setImage4(e.target.files[0])} type="file" id='image3' hidden />
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full max-w-[500px] px-3 py-2 ' placeholder='Type here' required />
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product description</p>
        <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" className='w-full max-w-[500px] px-3 py-2 ' placeholder='Right content here' required />
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

        <div>
          <p className='mb-2'>Product Category</p>
          <select onChange={(e) => setCategory(e.target.value)} value={category} className='w-full px-3 py-2'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Sub Category</p>
          <select onChange={(e) => setSubCategory(e.target.value)} value={subCategory} className='w-full px-3 py-2'>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwaer">Winterwear</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Product Price</p>
          <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px] ' type="Number" placeholder='250' />
        </div>
      </div>

      <div>
        <p className='mb-2'>Product Size</p>
        <div className='flex gap-3'>
          <div onClick={() => setSizes(prve => prve.includes("S") ? prve.filter(item => item !== "S") : [...prve, "S"])}>
            <p className={`${sizes.includes("S") ? "bg-pink-200" : "bg-slate-200"} px-3 py-1 cursor-pointer `}>S</p>
          </div>
          <div onClick={() => setSizes(prve => prve.includes("M") ? prve.filter(item => item !== "M") : [...prve, "M"])}>
            <p className={`${sizes.includes("M") ? "bg-pink-200" : "bg-slate-200"} px-3 py-1 cursor-pointer `}>M</p>
          </div>
          <div onClick={() => setSizes(prve => prve.includes("L") ? prve.filter(item => item !== "L") : [...prve, "L"])} >
            <p className={`${sizes.includes("L") ? "bg-pink-200" : "bg-slate-200"} px-3 py-1 cursor-pointer `}>L</p>
          </div>
          <div onClick={() => setSizes(prve => prve.includes("XL") ? prve.filter(item => item !== "XL") : [...prve, "XL"])}>
            <p className={`${sizes.includes("XL") ? "bg-pink-200" : "bg-slate-200"} px-3 py-1 cursor-pointer `}>XL</p>
          </div>
          <div onClick={() => setSizes(prve => prve.includes("XXL") ? prve.filter(item => item !== "XXL") : [...prve, "XXL"])}>
            <p className={`${sizes.includes("XXL") ? "bg-pink-200" : "bg-slate-200"} px-3 py-1 cursor-pointer `}>XXL</p>
          </div>
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
        <label className='cursor-pointer' htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>
      <button type='submit' className='w-20 py-3 mt-4 bg-black text-white  '>ADD</button>

    </form>
  )
}

export default Add