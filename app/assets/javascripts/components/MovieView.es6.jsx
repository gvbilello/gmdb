class MovieView extends React.Component {

  handleClick(event) {
    event.preventDefault();
    // debugger;
    let imdbID = this.props.movie.imdbID;
    let url = "http://www.omdbapi.com/?i=" + imdbID;

    $.ajax({
      url: url,
      method: 'GET'
    }).done(function(response) {
      // debugger;
      this.props.onSingleClick(response);
    }.bind(this))
  }

  render() {
    // debugger;
    let poster = "";
    movie = this.props.movie;
    if (movie.Poster === "N/A") {
      poster = "/assets/no-image-available.jpg";
    } else {
      poster = movie.Poster;
    }
    return (
      <ul className="collapsible popout">
        <li>
          <div className="collapsible-header row movie-search-result">
            <a onClick={this.handleClick.bind(this)}>
              <div className="col s2">
                <img className="movie-poster-small" src={poster} />
              </div>
              <div className="col s6">
                <p className="movie-search-title"><strong>{movie.Title}</strong></p>
                <p className="movie-search-info"><em>{movie.Type}</em> ({movie.Year})</p>
              </div>
            </a>
          </div>
          <div className="collapsible-body">
            <DisplayMovieView data={this.props.displayMovie} />
          </div>
        </li>
      </ul>
    )
  }
}
