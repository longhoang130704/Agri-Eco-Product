import UserService from "../services/user.service.js";

// [POST] v1/order-service/api/user
const createUser = async (req, res) => {
    try {
        const userBody = req.body;  
        const user = await UserService.createUser(userBody);  
        res.status(201).json({
            message: 'User created successfully',
            user: user,  
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something went wrong while creating user',
            error: error.details || error.error || null,
        });
    }
};

// [GET] v1/order-service/api/user
const getAllUser = async (req, res) => {
    try {
        const users = await UserService.getAllUser();
        res.status(200).json({
            message: 'Users fetched successfully',
            users: users,  
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something went wrong while fetching users',
            error: error.details || error.error || null, 
        });
    }
};

const UserController = {
    createUser,
    getAllUser,
};


export default UserController;
