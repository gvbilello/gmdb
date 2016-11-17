class DisplayMovieView extends React.Component {
  render() {
    let movie = this.props.data;
    // debugger;
    return (
      <div className="movie-display">
        <span className="movie-poster"><img src={movie.Poster} /></span>
      </div>
    )
  }
}
