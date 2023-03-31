const express = require('express');
const router = express.Router();

// Define some example products
const products = [
  { id: 1, name: 'Product 1', description: 'This is product 1' },
  { id: 2, name: 'Product 2', description: 'This is product 2' },
  { id: 3, name: 'Product 3', description: 'This is product 3' },
  { id: 4, name: 'Product 4', description: 'This is product 4' },
  { id: 5, name: 'Product 5', description: 'This is product 5' },
  { id: 6, name: 'Product 6', description: 'This is product 6' },
  { id: 7, name: 'Product 7', description: 'This is product 7' },
  { id: 8, name: 'Product 8', description: 'This is product 8' },
  { id: 9, name: 'Product 9', description: 'This is product 9' },
  { id: 10, name: 'Product 10', description: 'This is product 10' },
  { id: 11, name: 'Product 11', description: 'This is product 11' },
  { id: 12, name: 'Product 12', description: 'This is product 12' },
  { id: 13, name: 'Product 13', description: 'This is product 13' },
  { id: 14, name: 'Product 14', description: 'This is product 14' },
  { id: 15, name: 'Product 15', description: 'This is product 15' },
  { id: 16, name: 'Product 16', description: 'This is product 16' },
  { id: 17, name: 'Product 17', description: 'This is product 17' },
  { id: 18, name: 'Product 18', description: 'This is product 18' },
  { id: 19, name: 'Product 19', description: 'This is product 19' },
  { id: 20, name: 'Product 20', description: 'This is product 20' }
];

// Define the products API route
router.get('/products', (req, res) => {
  // Check if the request contains a valid token
  const token = req.headers.authorization?.split(' ')[1];
  if (!token || !tokens[token] || tokens[token] < Date.now()) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }

  // Parse and validate the query parameters
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.page_size) || 20;
  const sortAttr = ['id', 'name', 'description'].includes(req.query.sort_attr) ? req.query.sort_attr : 'id';
  const sortDir = ['asc', 'desc'].includes(req.query.sort_dir) ? req.query.sort_dir : 'desc';

  // Calculate the start and end indices of the page
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  async function sortedProducts(req, res) {
    try {
      const { page = 1, page_size = 20, sort_attr = "id", sort_dir = "desc" } = req.query;
  
      const startIndex = (page - 1) * page_size;
      const endIndex = page * page_size;
  
      const products = await Product.find();
  
      // Sort the products based on the provided sort_attr and sort_dir
      products.sort((a, b) => {
        if (sort_dir === "asc") {
          return a[sort_attr] - b[sort_attr];
        } else {
          return b[sort_attr] - a[sort_attr];
        }
      });
  
      const sortedProducts = products.slice(startIndex, endIndex);
  
      res.json({ data: sortedProducts });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
})