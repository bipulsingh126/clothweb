import express from 'express';
import cors from 'cors';
import 'dotenv/config'


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


 // start the server
 app.listen(port, () => console.log(`Server running on port ${port}`));