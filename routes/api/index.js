const
    express = require('express'),
    productRoutes = require('./product'),
    router = express.Router();

/* Child Routes */
router.use('/product/', productRoutes);

/* GET Methods */
router.get('/', function (req, res) {
    res.status(200).json({
        success: true,
        message: 'Hello API World!'
    })
})

module.exports = router;