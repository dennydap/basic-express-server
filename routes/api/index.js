const
    express = require('express'),
    router = express.Router();

router.get('/', function (req, res) {
    res.status(200).json({
        success: true,
        message: 'Hello API World!'
    })
})

module.exports = router;