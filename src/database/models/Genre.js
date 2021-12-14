module.exports = (sequelize, dataTypes) => {
    let alias = 'genres';

    let columns = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: dataTypes.STRING
        },
        ranking: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        active: {
            allowNull: false,
            type: dataTypes.INTEGER
        }
    };

    const Genre = sequelize.define(alias, columns,  {timestamps: false});

    return Genre;


}