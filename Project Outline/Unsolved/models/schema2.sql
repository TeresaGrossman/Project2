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
    moviePost VARCHAR (300) NULL,
    omdbMovieID INT (10) NOT NULL,
    omdbMovieName VARCHAR (100) NULL,
    movieRating INT (1) NULL
);

INSERT INTO users (firstName, lastName, emailAddress)
VALUES ("Matthew", "Huberty", "matthew.huberty@gmail.com");
INSERT INTO users (firstName, lastName, emailAddress)
VALUES ("Shirin", "Boroujeni", "shirin.boroujeni@gmail.com");
INSERT INTO users (firstName, lastName, emailAddress)
VALUES ("Trevor", "Knapp", "trevor.knapp.1991@gmail.com");
INSERT INTO users (firstName, lastName, emailAddress)
VALUES ("Teresa", "Grossman", "tmg.coder@gmail.com");
INSERT INTO users (firstName, lastName, emailAddress)
VALUES ("Charlie", "Brown", "charlie.brown@gmail.com");
INSERT INTO users (firstName, lastName, emailAddress)
VALUES ("Lucy", "Van Pelt", "lucy.vanpelt@gmail.com");
INSERT INTO users (firstName, lastName, emailAddress)
VALUES ("Pig", "Pen", "pig.pen@gmail.com");
INSERT INTO users (firstName, lastName, emailAddress)
VALUES ("Sally", "Brown", "sally.brown@gmail.com");
INSERT INTO users (firstName, lastName, emailAddress)
VALUES ("Peppermint", "Patty", "peppermint.patty@gmail.com");
INSERT INTO users (firstName, lastName, emailAddress)
VALUES ("Linus", "VanPelt", "linus.vanpelt@gmail.com");

INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(2, "suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede", 6787072, "Last Metro, The (Dernier mÃ©tro, Le)", 5);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(10, "sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus", 7084602, "Pit and the Pendulum, The", 3);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(9, "in imperdiet et commodo vulputate justo in blandit ultrices enim lorem", 2791096, "My Man Godfrey", 1);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(8, "imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin", 6757211, "Black Death", 2);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(4, "nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in", 4908593, "All Dogs Christmas Carol, An", 4);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(1, "aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam", 3365320, "Tape", 2);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(1, "duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu", 2028647, "Can I Do It 'Till I Need Glasses?", 1);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(10, "eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio", 8267256, "Living in Oblivion", 5);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(8, "faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque", 5062709, "Alfie", 4);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(7, "ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu", 5204632, "Sexual Chronicles of a French Family (Chroniques sexuelles d'une famille d'aujourd'hui)", 1);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(10, "ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices", 9447517, "Idle Hands", 5);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(7, "mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum", 7060443, "Wash, The", 3);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(1, "condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas", 7668607, "Hoodoo Ann", 2);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(8, "urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum", 8153381, "Chronos", 5);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(2, "ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea", 1010038, "Last of England, The", 1);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(3, "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque", 9333234, "Snake in the Eagle's Shadow (Se ying diu sau)", 5);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(9, "semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat", 4588408, "Ed and His Dead Mother", 1);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(2, "fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum", 6767233, "Tenchi: The Samurai Astronomer", 5);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(3, "ac diam cras pellentesque volutpat dui maecenas tristique est et", 7291533, "Sex and Zen (Rou pu Tuan zhi tou Qing bao Jian)", 3);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(9, "non mi integer ac neque duis bibendum morbi non quam nec", 4966352, "Guinevere", 3);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(9, "pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc", 4263660, "French Connection II", 5);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(4, "pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros", 6542628, "It Runs in the Family (My Summer Story)", 5);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(5, "lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis", 2939105, "Good Time Girls, The (Bonnes femmes, Les)", 5);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(7, "cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros", 6892154, "Rage in Heaven", 1);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(6, "primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi", 8455407, "Stuff, The", 2);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(3, "eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus", 5714962, "Almost an Angel", 1);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(2, "duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id", 1787511, "Mamma Mia!", 4);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(5, "justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas", 5879762, "Five Star Final", 4);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(2, "neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit", 8083653, "No End in Sight", 2);
INSERT INTO blogs  (parent_id,moviePost, omdbMovieID, omdbMovieName, movieRating) VALUES(8, "non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci", 6709499, "Thieves' Highway", 4)

    
-- SELECT * FROM users;

