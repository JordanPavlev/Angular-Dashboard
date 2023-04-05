const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'products.json');

const getProducts = (req, res, next) => {
  const page = Number(req.query.page) || 1;
  const pageSize = Number(req.query.page_size) || 20;
  const sortAttr = ['id', 'name', 'description'].includes(req.query.sort_attr)
    ? req.query.sort_attr
    : 'id';
  const sortDir = ['asc', 'desc'].includes(req.query.sort_dir)
    ? req.query.sort_dir
    : 'desc';

  // read products data from JSON file
  fs.readFile('data/products.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read products data' });
    }

    // parse products data from JSON
    let products = [];
    try {
      products = JSON.parse(data).data;
    } catch (err) {
      console.error(data);
      return res.status(500).json({ error: 'Failed to parse products data' });
    }

    // paginate and sort products
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const sortedProducts = products.sort((a, b) => {
      if (sortDir === 'asc') {
        return a[sortAttr] - b[sortAttr];
      } else {
        return b[sortAttr] - a[sortAttr];
      }
    });
    const paginatedProducts = sortedProducts.slice(startIndex, endIndex);

    // return paginated products in response
    res.json( paginatedProducts );
  });
};

module.exports = { getProducts };