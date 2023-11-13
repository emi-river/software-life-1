CREATE TABLE movies (
  id serial PRIMARY KEY,
  "name" text UNIQUE NOT NULL,
  genre text NOT NULL,
  img text NOT NULL,
  rating text NOT NULL,
  "description" text NOT NULL
);

INSERT INTO movies ("name", genre, img, rating, "description") VALUES ('Shrek', 'Fantasy', 'https://i-viaplay-com.akamaized.net/viaplay-prod/993/800/1613762117-f07774c22a81b35740522f9e1b18e1e03331bc19.jpg?width=400&height=600','7.9', 'A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.'),
('Coco','Animation','https://i-viaplay-com.akamaized.net/viaplay-prod/735/632/1527510737-888df6270297a5191d9fe1f3c7bdaf989f5770f3.jpg?width=400&height=600','8.4','Aspiring musician Miguel, confronted with his family`s ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.'),
('Spider-Man','Action', 'https://i-viaplay-com.akamaized.net/viaplay-prod/157/420/1460156805-bf7416123f7babb413c3669b8e2767e7827041b8.jpg?width=400&height=600','7.4','After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy.'),
('The Lion King', 'Animation','https://miro.medium.com/v2/resize:fit:1000/1*ibiKVRfLzrsFAdye8Mj4WQ.jpeg','8.5','Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.'),
('Rat Race', 'Comedy', 'https://m.media-amazon.com/images/M/MV5BNWEzM2NjMjctM2U3Yi00MGZhLWJlYTYtMWEyYjVjZDEzZjM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg','6.4','A Las Vegas casino magnate determined to find a new avenue for wagering sets up a race for money.'),
('Night at the Museum', 'Family','https://lumiere-a.akamaihd.net/v1/images/natm_ccc6bcb4.jpeg?region=0%2C0%2C584%2C876','6.5','A newly recruited night security guard at the Museum of Natural History discovers that an ancient curse causes the animals and exhibits on display to come to life and wreak havoc.'),
('The Incredibles', 'Animation','https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_.jpg','8.0','While trying to lead a quiet suburban life, a family of undercover superheroes are forced into action to save the world.'),
('Footloose', 'Drama','https://m.media-amazon.com/images/M/MV5BMTY3MjIzMjk4M15BMl5BanBnXkFtZTcwMzMxMzIzNg@@._V1_FMjpg_UX1000_.jpg','5.8','City teenager Ren MacCormack moves to a small town where rock music and dancing have been banned, and his rebellious spirit shakes up the populace.'),
('Elemental', 'Animation','https://m.media-amazon.com/images/M/MV5BZjYxYWVjMDMtZGRjZS00ZDE4LTk0OWUtMjUyOTI4MmYxNjgwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg','7.0','Follows Ember and Wade, in a city where fire-, water-, earth- and air-residents live together.'),
('Luca', 'Animation','https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_FMjpg_UX1000_.jpg','7.4','On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human.'),
('Encanto', 'Animation','https://musicart.xboxlive.com/7/2d0e5200-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080','7.2','A Colombian teenage girl has to face the frustration of being the only member of her family without magical powers.');
