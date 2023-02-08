const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
  .then(([rows,a])=>{
    res.render('shop/product-list', {
      prods: rows,
      pageTitle: rows.title,
      path: '/products'
    });
  })
  .catch(()=>{
    console.log("products get product error")
  })
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId).then(([product])=>{
    res.render('shop/product-detail', {
      product: product[0],
      pageTitle: product.title,
      path: '/products'
    });
  })
  .catch(()=>{
    console.error("error in details button")
  })
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
  .then(([rows,a])=>{
    console.log(rows)
    res.render('shop/index', {
      prods: rows,
      pageTitle: rows.title,
      path: '/'
    });
  })
  .catch(()=>{
    console.log("shop get product error")
  })
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
