import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

// if you run localhost use it else comment it
process.env.MONGO_URI= "mongodb://localhost:27017/AgriE-order-database"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Thoát nếu kết nối thất bại
    }
};

export default connectDB;
