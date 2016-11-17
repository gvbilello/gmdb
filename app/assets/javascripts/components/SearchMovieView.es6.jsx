class SearchMovieView extends React.Component {
  render() {
    // debugger;
    if (this.props.movies.length > 0 || this.props.displayMovie) {
      return (
      <div className="col s6">
        <p><em>Search only displays up to 10 results.</em></p>
        {this.props.movies[0].Search.map((movie, index) => {
          return <MovieView onSingleClick={this.props.onSingleClick.bind(this)} displayMovie={this.props.displayMovie} movie={movie} key={index} />
        })}
      </div>
      )
    } else {
      return (
        <p><em>Search for a movie, series, or game.</em></p>
      )
    }
  }
}
