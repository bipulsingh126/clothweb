import jwt from 'jsonwebtoken';

const authUser = async (req, res , next) =>{
    const {token} = req.headers;
    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Not Authorized Lgin again'
        })
    }
    try {
        const token_decode = jwt.verify(token , process.env.JWT_SECRET);
        req.body.userId = token_decode.id 
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: true,
            message: error.message
        })
    }
}


export default authUser;