import mongoose from "mongoose";

const connactDB = async () => {
    mongoose.connection.on('connected',()=>{
        console.log('DB connection established');
        
    })
await mongoose.connect(`${process.env.MONGODB_URI}/clothes-Ecommerce`)
}


export default connactDB;