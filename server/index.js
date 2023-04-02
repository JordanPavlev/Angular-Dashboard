// const express = require('express');
// const uuidv4 = require('uuid').v4;
// const { set, get } = require('node-persist');

// const app = express();
// app.use(express.json());
// let token = null;
// let tokenExpirationTime = null;

// const products = [
//   { id: 1, name: 'Product 1', description: 'This is product 1' },
//   { id: 2, name: 'Product 2', description: 'This is product 2' },
//   { id: 3, name: 'Product 3', description: 'This is product 3' },
//   { id: 4, name: 'Product 4', description: 'This is product 4' },
//   { id: 5, name: 'Product 5', description: 'This is product 5' },
//   { id: 6, name: 'Product 6', description: 'This is product 6' },
//   { id: 7, name: 'Product 7', description: 'This is product 7' },
//   { id: 8, name: 'Product 8', description: 'This is product 8' },
//   { id: 9, name: 'Product 9', description: 'This is product 9' },
//   { id: 10, name: 'Product 10', description: 'This is product 10' }
// ];

// app.post('/signin', async (req, res) => {
//   const { email, password } = req.body;
  
//   if (email === 'admin@sample.com' && password === '#admIN99') {
//     token = uuidv4();
//     tokenExpirationTime = new Date().getTime() + 5 * 60 * 1000; // Expire in 5 minutes (300 000 milliseconds)

//     res.json({ token });
//   } else {
//     res.status(401).json({ error: 'Invalid credentials' });
//   }
// });

// app.get('/products', (req, res) => {
//   const { page = 1, page_size = 20, sort_attr = 'id', sort_dir = 'desc' } = req.query;

//   const authHeader = req.headers.authorization;
//  // Check for the authorization header
//   if (!authHeader) {
//     return res.status(401).json({ error: 'Please provide Authorization Header: (Authorization: Bearer <token>)' });
//   }
// //Checks if it's Bearer token
//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     res.status(401).json({ error: 'Invalid authorization header.(Authorization: Bearer <token>)' });
//     return;
//   }

//   //checks the remaining time 
//   if (!token || new Date().getTime() > tokenExpirationTime) {
//     res.status(401).json({ error: 'Token has expired. Please sign in again' });
//     return;
//   }
  
//   const sortedProducts = products.sort((a, b) => {
//     if (sort_dir === 'asc') {
//       return a[sort_attr] - b[sort_attr];
//     } else {
//       return b[sort_attr] - a[sort_attr];
//     }
//   });
  
//   const startIndex = (page - 1) * page_size;
//   const endIndex = startIndex + page_size;
  
//   const data = sortedProducts.slice(startIndex, endIndex);
  
//   res.json({ data: products });
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });




const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
const errorHandler  = require('./middleware/errorHandler');
const authMiddleware = require('./middleware/authMiddleware');

// Routes
const signinRoutes = require('./routes/signin');
const productsRoutes = require('./routes/products');

// Mounting middleware
app.use(express.json());
// app.use(errorHandler);

// Mounting routes
app.use('/', signinRoutes);
// app.use('/products', authMiddleware, productsRoutes);

// Starting server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));




// const express = require('express');
// const app = express();
// const authRoutes = require('./routes/signin');
// const productsRoutes = require('./routes/products');
// const authMiddleware = require('./middleware/authMiddleware');
// const { errorHandler } = require('./middleware/errorHandler');

// app.use(express.json());
// app.use('/', authRoutes);
// app.use(authMiddleware.authenticateToken);
// app.use('/', productsRoutes);
// app.use(errorHandler);

// module.exports = app;