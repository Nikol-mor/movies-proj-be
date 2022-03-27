const movieService = require('./movie.service');

module.exports = {
  getMovies,
  getMovie,
};

async function getMovies(req, res) {
  try {
    const movies = await movieService.query();

    res.send(movies);
  } catch (err) {
    console.log('Failed to get movies', err);
    res.status(500).send({ err: 'Failed to get movies' });
  }
}

async function getMovie(req, res) {
  try {
    const movie = await movieService.getById(req.params.id);
    res.send(movie);
  } catch (err) {
    console.log('Failed to get movie', err);
    res.status(500).send({ err: 'Failed to get movie' });
  }
}
