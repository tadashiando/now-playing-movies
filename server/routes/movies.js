require('../config/config');

const express = require('express');
const axios = require('axios')
const app = express();

const getMovies = async (page) => {
    try {
        return await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
            params: { api_key: process.env.API_KEY, page }
        })
    } catch (error) {
        console.error(error)
    }
}

// providing a constant endpoint for now playing movies
app.get('/api/now-playing', async (req, res, next) => {
    getMovies(req.query.page)
        .then(response => res.json(response.data))
        .catch(err => next(err));
    console.log('Now playing endpoint has been called!')
})

module.exports = app;