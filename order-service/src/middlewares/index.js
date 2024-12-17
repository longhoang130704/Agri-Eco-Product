import express from 'express';

const setupMiddlewares = (app) => {
    app.use(express.json()); // Xử lý JSON
    app.use(express.urlencoded({ extended: true })); // Xử lý URL encoded
};

export default setupMiddlewares;
