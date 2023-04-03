const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const tokens = {};


// local token
app.use((req, res, next) => {
  req.app.locals.tokens = tokens;
  next();
});

// middlewares
const {errorHandler}  = require('./middleware/errorHandler');
const {authMiddleware} = require('./middleware/authMiddleware');

// POST and GET from the routes
const signinRoutes = require('./routes/signin');
const productsRoutes = require('./routes/products');

// Error handler middleware 
app.use(errorHandler);

// Mounting routes
app.use('/signin', signinRoutes);
app.use('/products', authMiddleware, productsRoutes);

// Starting server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
