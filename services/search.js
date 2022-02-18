const { google } = require('googleapis');
const axios = require('axios'); 

module.exports = {
    
    /**
     * needs work
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */

    async search(req, res) {
        try {
            if (req.query.queryString) {
                const youtube = google.youtube({
                    version: 'v3',
                    auth: process.env.YOUTUBE_API_KEY
                })
        
                const resp = await youtube.search.list({
                    part: 'id,snippet',
                    maxResults: 50,
                    q: req.query.queryString, // substitute with the query string
                })
        
                res.send(resp.data)
            } else {
                res.sendStatus(400);
            }
            
    
            // console.log('what was searched', req.params);
            // console.log('what was ???queried', req.query.queryString);
            // res.send('OK')
        } catch (error) {
            res.sendStatus(400);
        }
      
    },
}