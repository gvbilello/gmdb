class App extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  updateMain(movies) {
    // debugger;
    this.setState({
      movies: [movies],
    })
  }

  displayMovie(movie) {
    // debugger;
    this.setState({
      movie: movie
    })
  }

  render() {
    return (
      <div className="app-main">
        <header id="nav">
          <h1>GMDb</h1>
          <a href="/">home</a>
          <SearchBoxView onSearch={this.updateMain.bind(this)} />
        </header>
        <section className="movies-display">
          <SearchMovieView onSingleClick={this.displayMovie.bind(this)} movie={this.state.movie} movies={this.state.movies} />
        </section>
      </div>
    )
  }
}
