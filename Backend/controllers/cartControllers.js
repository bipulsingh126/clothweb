

//add product  to user cart

import { usermodel } from "../models/usermodels.js";

const addToCart = async (req, res)=>{
    try {
        const {userId, itemId, size} = req.body;
        const userData = await usermodel.findById(userId)
        let cartData = await userData.cartData;
        
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1 
            }else{
                cartData[itemId][size] = 1
            }
        }else{
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        await usermodel.findByIdAndUpdate(userId, {cartData});
        
        res.status(200).json({
            success : true,
            message : "Product added to cart successfully"
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message : error.message
        })
        
        
    }
}


//update user cart 

const updateToCart = async (req, res)=>{
    try {
        const {userId, itemId, size, quantity} =  req.body;
        const userData = await usermodel.findById(userId);
        let cartData = await userData.cartData;

        cartData[itemId][size] = quantity;
        await usermodel.findByIdAndUpdate(userId, {cartData});
        res.status(200).json({
            success : true,
            message : "Product quantity updated successfully"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}



// get  user cart data 

const getUserCart = async (req, res)=>{
    try {
        const {userId} = req.body;
        const userData = await usermodel.findById(userId);
        let cartData = await userData.cartData;
        res.status(200).json({
            success : true,
            message : "User cart data fetched successfully",
            cartData
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message : error.message
        })
        
        
    }
}


export {addToCart, updateToCart, getUserCart};