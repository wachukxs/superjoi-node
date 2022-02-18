const { google } = require('googleapis');
const axios = require('axios');


module.exports = {
    // get ratings and no. of comments?
    async fetchComments(req, res) {

        console.log('what was searched', req.query);


        try {
            if (req.query.videoId) {

                const youtube = google.youtube({
                    version: 'v3',
                    auth: process.env.YOUTUBE_API_KEY
                })

                const resp = await youtube.commentThreads.list({

                    videoId: req.query.videoId,
                    part: 'id,snippet,replies'
                })

                res.send(resp.data)
            } else {
                res.sendStatus(400)
            }

        } catch (error) {
            console.error('ERR details', error)
            res.sendStatus(400)
        }

    },


    async commentReplies(req, res) {

        console.log('what was searched', req.query);


        try {
            if (req.query.videoId) {

                const youtube = google.youtube({
                    version: 'v3',
                    auth: process.env.YOUTUBE_API_KEY
                })

                const resp = await youtube.comments.list({

                    id: req.query.commentId,
                    part: 'id,snippet'
                })

                res.send(resp.data)
            } else {
                res.sendStatus(400)
            }

        } catch (error) {
            console.error('ERR details', error)
            res.sendStatus(400)
        }

    },
}