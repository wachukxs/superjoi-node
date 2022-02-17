let express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
    res.send('Hey there. We\'re up!')
})

module.exports = router;