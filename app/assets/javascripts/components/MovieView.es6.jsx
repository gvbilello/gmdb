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
    movie = this.props.movie;
    return (
      <div className="movie-search-display">
        <a onClick={this.handleClick.bind(this)}><strong>{movie.Title}</strong> - <em>{movie.Type}</em> ({movie.Year})</a>
      </div>
    )
  }
}
