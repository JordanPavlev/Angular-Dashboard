const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'products.json');

const getProducts = (req, res, next) => {
  const { page = 1, page_size = 20, sort_attr = 'id', sort_dir = 'desc' } = req.query;



  const startIndex = (page - 1) * page_size;
  const endIndex = startIndex + page_size;
  fs.readFile(dataPath, (err, data) => {
    if (err) return next(err); 
    const products = JSON.parse(data);
    const sortedProducts = products.sort((a, b) => {
      const sortValueA = a[sort_attr];
      const sortValueB = b[sort_attr];
      if (sortValueA < sortValueB) return sort_dir === 'asc' ? -1 : 1;
      if (sortValueA > sortValueB) return sort_dir === 'asc' ? 1 : -1;
      return 0;
    });
    const paginatedProducts = sortedProducts.slice(startIndex, endIndex);
    return res.status(200).json({ data: paginatedProducts });
  });
};

module.exports = { getProducts };