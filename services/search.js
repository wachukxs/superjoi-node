const { google } = require('googleapis');
const axios = require('axios'); 

module.exports = {
    /**
     * needs work
     * @param {*} req 
     * @param {*} res 
     * @returns http status code
     */
    delete(req, res) {
        
    },

    /**
     * WHY IS TENURE == Roommate ??? can't we do better ??
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    save(req, res, next) {
        
    },

    /**
     * needs work
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */

    async search(req, res) {
        const youtube = google.youtube({
            version: 'v3',
            auth: process.env.YOUTUBE_API_KEY
        })

        const resp = await youtube.search.list({
            part: 'id,snippet',
            q: req.query.queryString, // substitute with the query string
        })

        res.send(resp.data)

        // console.log('what was searched', req.params);
        // console.log('what was ???queried', req.query.queryString);
        // res.send('OK')
      
    },
}