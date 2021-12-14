const db = require('../database/models/index.js');

const genresController = {
    list: (req, res) => {
        let pelisData = db.genres.findAll();
        pelisData.then(genres => {
           res.render('genresList', {genres: genres})
        })
             .catch(err => console.log(err))
            },
    detail: (req, res) => {
        db.genres.findByPk(req.params.id).then( genre => {
            res.render('genresDetail', {genre: genre})
        })
    },
    }
    


module.exports = genresController