const
    express = require('express'),
    router = express.Router();

/* Routes */
router.get('/', function (req, res) {
    res.status(200).json({
        success: true,
        message: 'Hello Product World!'
    })
})

router.get('/:product_name', function (req, res) {
    res.status(200).json({
        success: true,
        message: 'This is ' + req.params.product_name + ' page!'
    })
})

module.exports = router;