let express = require('express');
let router = express.Router();

const services = require('../services')

router.get('/videos/details', express.json(), services.videosService.fetchComments);

router.get('/playlist', services.playlistService.search);

router.get('/', services.searchService.search)

module.exports = router;