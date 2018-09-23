module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Define the user model:
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    emailAddress: DataTypes.STRING,
    password: DataTypes.INTEGER,
    userName: DataTypes.STRING
  });

  User.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.Blog, {
      onDelete: "cascade" //deletes all posts that the author has created.
    });
  };

  return User;
};
