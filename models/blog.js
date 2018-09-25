module.exports = function(sequelize, DataTypes) {
    var Blog = sequelize.define("Blog", {
      // Giving the Blog model a name of type STRING
      moviePost: DataTypes.STRING,
      omdbMovieID: DataTypes.INTEGER,
      omdbMovieName: DataTypes.STRING,
      movieRating: DataTypes.INTEGER
    });
  
    Blog.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Blog.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Blog;
  };