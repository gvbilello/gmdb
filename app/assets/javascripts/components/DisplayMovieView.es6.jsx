class DisplayMovieView extends React.Component {
  render() {
    let movie = this.props.data;
    imdbLink = "http://www.imdb.com/title/" + movie.imdbID;
    if (movie.Poster === "N/A") {
      poster = "/assets/no-image-available.jpg";
    } else {
      poster = movie.Poster;
    }
    return (
      <div className="row movie-display-large">
        <div className="col s5 movie-poster">
          <img src={poster} />
        </div>
        <div className="col s1">
        </div>
        <div className="col s6 movie-info">
          <p><strong>{movie.Title}</strong></p>
          <p><a href={imdbLink}>IMDb Link</a></p>
          <p>Released: <em>{movie.Released}</em></p>
          <p>{movie.Country} - {movie.Runtime} - {movie.Rated}</p>
          <p>Director: <em>{movie.Director}</em></p>
          <p>Writer(s): <em>{movie.Writer}</em></p>
          <p>Cast: <em>{movie.Actors}</em></p>
          <p><em>"{movie.Plot}"</em></p>
        </div>
      </div>
    )
  }
}
