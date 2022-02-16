const playlistService = require('./playlists');
const searchService = require('./search');
const videosService = require('./videos');

/**
 * later, Automatically export by file name like sequelize's models folder is exported
 */
module.exports = {
    playlistService,
    searchService,
    videosService,
}