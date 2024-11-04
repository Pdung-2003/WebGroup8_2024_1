const { DataTypes } = require('sequelize');
const sequelize = require('../connection');
const Genre = require('./Genre');

const Movie = sequelize.define('Movie', {
    movie_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    movie_name: { type: DataTypes.STRING, allowNull: false },
    genre_id: { type: DataTypes.INTEGER },
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    duration: { type: DataTypes.INTEGER },
    release_date: { type: DataTypes.DATE }
}, {
    tableName: 'Movies',
    timestamps: false
});

Movie.belongsTo(Genre, { foreignKey: 'genre_id' });

module.exports = Movie;
