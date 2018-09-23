module.exports = function(sequelize, DataTypes) {
  // var Sequelize = require("sequelize");
  var Blog = sequelize.define("Blog", {
    // Giving the Blog model a name of type STRING
    moviePost: DataTypes.STRING,
    omdbMovieID: DataTypes.INTEGER,
    omdbMovieName: DataTypes.STRING,
    movieRating: DataTypes.INTEGER,
    // created_at: Sequelize.DATE
  });
  //for unkown column 'id' in fieldlist
  //Blog.removeAttribute("id");

  // Blog.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Blog.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Blog;
};
