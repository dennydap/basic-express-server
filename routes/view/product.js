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

module.exports = router;