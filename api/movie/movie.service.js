var movies = require('../../data/db.json');

module.exports = {
  query,
  getById,
};

async function query() {
  return Promise.resolve(movies.movies);
}

async function getById(movieId) {
  console.log(movieId);
  const movie = movies.movies.find((movie) => movie.id.toLocaleString() === movieId);
  return Promise.resolve(movie);
}
