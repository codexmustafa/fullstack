import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './utils/db.js';
import userRouter from './routes/user.routes.js';//route import 
dotenv.config()

const app = express();
const port = process.env.PORT || 3000; 

app.use(
    cors({
        origin: 'process.env.BASE_URL',
        credentials: true,
        methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization','application/json']
    })
);

app.use(express.json()); 
app.use(express.urlencoded({extended: true}))
app.get('/', (req, res) => {  
    res.send("Hello World")
});

app.get('/contact', (req, res) => {
    res.send('contact')
});
 
//connect database
db();
app.use('/api/v1/users/', userRouter);   
 
app.listen(port, () => {
    console.log('port is running on ', port)
})