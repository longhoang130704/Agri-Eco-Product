import dotenv from 'dotenv';
import express from 'express';
// ---------------------------------
import connectDB from './configs/db.js';
import setupMiddlewares from './middlewares/index.js';
import initRouter from './route/v1/index.js';
// import data from .env 
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Setup middlewares
setupMiddlewares(app);

// api/v1/order-service/{service}
// Api version 1
initRouter(app);

// Sample route
app.get('/order-service', (req, res) => {
    res.json("order-service is running");
});

app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`)
});
