module.exports = (sequelize, dataTypes) => {
    let alias = 'movies';

    let columns = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        title: {
            allowNull: false,
            type: dataTypes.STRING
        },
        rating: {
            allowNull: false,
            type: dataTypes.DECIMAL
        },
        awards: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        release_date: {
            type: dataTypes.DATE
        },
        length: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            allowNull: false,
            type: dataTypes.INTEGER
        }
    };

    const Movie = sequelize.define(alias, columns,  {timestamps: false});

    return Movie;


}