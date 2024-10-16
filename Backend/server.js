import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connactDB from './config/mongodb.js';
import connectCloudinary from './config/cloudnary.js';
import userRouter from './routes/userRoute .js';
import productRouter from './routes/productRoute.js';


//app config
 const app = express();
 const port = process.env.PORT || 5000;

 // middleware
 app.use(cors());
 app.use(express.json());

 // api endpoint
 app.get('/', (req, res) => {
    res.send('API is running...');
 })

 // connect to database
 connactDB();
 connectCloudinary();

 //api endpoint
 app.use('/api/user',userRouter);
 app.use('/api/product', productRouter);

 // start the server
 app.listen(port, () => console.log(`Server running on port ${port}`));