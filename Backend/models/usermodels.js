import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cartDate: {
        type : Object,
        default: {}
    }
},{minimize:false})


export const  usermodel = mongoose.models.user || mongoose.model("user", userSchema);