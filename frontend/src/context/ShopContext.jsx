import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets.js";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

const currency = '₹';
const delivery_fee = 40; 

const [search , setSearch] = useState('');
const [showSearch , setShowSearch] = useState(true);


    const value = {
        products, currency , delivery_fee
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;