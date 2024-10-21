import jwt from 'jsonwebtoken';



const adminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers
        if (!token) {
            return res.status(400).json({
                success: false,
                message: 'Invalid token'
            })
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(403).json({
                success: false,
                message: 'Invalid token'
            })
        }

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            success: true,
            message: error.message
        })
    }
}

export default adminAuth;