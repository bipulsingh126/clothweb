import { usermodel } from "../models/usermodels.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

//loging controller
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await usermodel.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = createToken(user._id);
            return res.status(200).json({
                success: true,
                message: "Logged in successfully",
                token
            })
        } else {
            return res.status(500).json({
                success: false,
                message: "Invalid password"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        })


    }
}

//user registertion 

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // checking user exists
        const exists = await usermodel.findOne({ email });
        if (exists) {
            return res.status(200).json({
                success: true,
                message: "User already exists"
            })
        }

        // validate email nd strong  password
        if (!validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email"
            })
        }
        if (password.length < 8) {
            return res.status(400).json({
                success: false,
                message: "Password should be at least 8 characters long"
            })
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = new usermodel({
            name,
            email,
            password: hashPassword
        })

        const user = await newUser.save();

        const token = createToken(user._id)
        res.status(200).json({
            success: true,
            message: "User registered successfully",
            token
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

//admin login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.status(200).json({
                success: true,
                token
            })
        } else {
            res.status(500).json({
                success: false,
                message: "Invalid credentials"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }

}

export { loginUser, registerUser, adminLogin }