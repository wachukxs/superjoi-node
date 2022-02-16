let express = require('express');
let router = express.Router();

const services = require('../services')

router.post('/videos', express.json(), services.videosService.search);

router.post('/playlist', services.playlistService.search);

router.post('/', services.searchService.search)

module.exports = router;