class App extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      displayMovie: undefined
    }
  }

  updateMain(movies) {
    // debugger;
    this.setState({
      movies: [movies]
    })
  }

  displayMovie(movie) {
    // debugger;
    this.setState({
      displayMovie: movie
    })
  }

  render() {
    return (
      <div className="container">
        <nav>
          <div className="nav-wrapper indigo lighten-2">
            <a href="/" className="brand-logo"><span className="page-title">GMDb<i className="large material-icons">movie</i></span></a>
          </div>
        </nav>
        <div className="col s6 offset-3">
          <SearchBoxView onSearch={this.updateMain.bind(this)} />
        </div>
        <section className="movies-display">
          <SearchMovieView onSingleClick={this.displayMovie.bind(this)} displayMovie={this.state.displayMovie} movies={this.state.movies} />
        </section>
      </div>
    )
  }
}

// <div className="container">
//   <header id="nav">
//     <h1>GMDb</h1>
//     <a href="/">home</a>
//     <SearchBoxView onSearch={this.updateMain.bind(this)} />
//   </header>
//   <section className="movies-display">
//     <SearchMovieView onSingleClick={this.displayMovie.bind(this)} movie={this.state.movie} movies={this.state.movies} />
//   </section>
// </div>
