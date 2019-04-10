const
    express = require('express'),
    productRoutes = require('./product'),
    router = express.Router();

/* Child Routes */
router.use('/product', productRoutes);

/* Routes */
router.get('/', function (req, res) {
    res.status(200).json({
        success: true,
        message: 'Hello World!'
    })
})



module.exports = router;