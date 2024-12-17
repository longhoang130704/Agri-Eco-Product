import userRouter from './user.route.js';

function initRouter (app) {
    app.use('/api/v1/order-service/user', userRouter)
}

export default initRouter;