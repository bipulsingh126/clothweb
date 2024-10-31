

//add product  to user cart

import { usermodel } from "../models/usermodels";

const addToCart = async (req, res)=>{
    try {
        const {userId, itemId, size} = req.body;
        const userData = await usermodel.findById(userId);
        let cartData = await userData.cartData;
        
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1 ;
            }else{
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        
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
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message : error.message
        })
        
        
    }
}


export {addToCart, updateToCart, getUserCart};