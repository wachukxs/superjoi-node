let express = require('express');
let router = express.Router();

const services = require('../services')

router.get('/videos', express.json(), services.videosService.search);

router.get('/playlist', services.playlistService.search);

router.get('/', services.searchService.search)

module.exports = router;