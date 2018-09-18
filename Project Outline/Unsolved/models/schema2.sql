DROP DATABASE IF EXISTS movieBlog;
CREATE DATABASE movieBlog;

USE movieBlog;

CREATE TABLE users(
  userID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(45) NULL,
  lastName VARCHAR(45) NULL,
  emailAddress VARCHAR (65) NULL
);

CREATE TABLE blogs(
	blogID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    parent_id INT NOT NULL,
    INDEX par_ind (parent_id),
    FOREIGN KEY (parent_id)
      REFERENCES users(userID)
      ON DELETE CASCADE,
    movieName VARCHAR (65) NULL,
    moviePost VARCHAR (200) NULL
);

INSERT INTO users (firstName, lastName, emailAddress)
VALUES ("Matthew", "Huberty", "matthew.huberty@gmail.com");

SELECT * FROM users;

