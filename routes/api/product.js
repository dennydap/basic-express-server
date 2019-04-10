const
    express = require('express'),
    router = express.Router();

/* GET Methods */
router.get('/', function (req, res) {
    res.status(200).json({
        success: true,
        message: 'Hello API Product World!'
    })
})

module.exports = router;