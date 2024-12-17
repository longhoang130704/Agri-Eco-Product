import UserModel from '../models/user.model.js';

// [POST] v1/order-service/api/user
const createUser = async (userBody) => {
    try {
        const user = new UserModel(userBody);  
        await user.save();  
        return user;  
    } catch (error) {
        console.log(`Error in UserService createUser: ${error.message}`);
        throw { message: 'Error creating users', error: error.message };
    }
};

// [GET] v1/order-service/api/user
const getAllUser = async () => {
    try {
        const users = await UserModel.find();  
        return users;  
    } catch (error) {
        console.log(`Error in UserService getAllUser: ${error.message}`)
        throw { message: 'Error fetching users', error: error.message };
    }
};

const UserService = {
    createUser,
    getAllUser,
};


export default UserService;
