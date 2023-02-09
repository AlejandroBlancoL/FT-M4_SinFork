/* ¡Escribe tus comandos en este archivo! */

const ejercicio02 = 'SELECT title FROM movies  WHERE duration < 91;';

const ejercicio03 = 'SELECT title FROM movies WHERE year > 1928 AND year < 1941;';

const ejercicio04 = 'SELECT title FROM movies WHERE title LIKE '%til%';';

const ejercicio05 = 'SELECT * FROM movies WHERE cardinality(actors)=1;';

const ejercicio06 = 'SELECT titles, AVG(rating) FROM movies, unnest(ratings) rating GROUP BY title;';

const ejercicio07 = 'SELECT title FROM movies WHERE title LIKE '%Fast-and%' AND year = 2016;';

module.exports = {
   ejercicio02,
   ejercicio03,
   ejercicio04,
   ejercicio05,
   ejercicio06,
   ejercicio07,
};
