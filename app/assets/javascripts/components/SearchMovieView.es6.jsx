class SearchMovieView extends React.Component {
  render() {
    // debugger;
    if (this.props.movies.length > 0 && this.props.movies[0].Response === "True") {
      if (this.props.movies[0].Search.length > 1 && this.props.movie === undefined) {
        return (
        <div className="movie-search">
          <p><em>Search only displays up to 10 results.</em></p>
          {this.props.movies[0].Search.map((movie, index) => {
            return <MovieView onSingleClick={this.props.onSingleClick.bind(this)} movie={movie} key={index} />
          })}
        </div>
        )
      } else if (this.props.movie) {
        return (
          <div className="movie-display">
            <DisplayMovieView data={this.props.movie} />
          </div>
        )
      }
    } else {
      return (
        <p><em>Search for a movie, series, or game.</em></p>
      )
    }
  }
}
