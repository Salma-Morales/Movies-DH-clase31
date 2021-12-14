const db = require('../database/models/index.js');

const moviesController = {
    list: (req, res) => {
        let pelisData = db.movies.findAll();
        pelisData.then(movies => {
           res.render('moviesList', {movies: movies})
        })
             .catch(err => console.log(err))
            },
    detail: (req, res) => {
        db.movies.findByPk(req.params.id).then( movie => {
            res.render('moviesDetail', {movie: movie})
        })
    },
    new: (req, res) => {
        let pelisData = db.movies.findAll({
            order: [['release_date', 'DESC']]
        });
        pelisData.then(movies => {
           res.render('newestMovies', {movies: movies})
        })
             .catch(err => console.log(err))
            },
    recommended: (req, res) => {
        let pelisData = db.movies.findAll({
            limit: 5,
            order: [['release_date', 'ASC']]
        });
        pelisData.then(movies => {
           res.render('newestMovies', {movies: movies})
        })
             .catch(err => console.log(err))
            },
    }
    


module.exports = moviesController