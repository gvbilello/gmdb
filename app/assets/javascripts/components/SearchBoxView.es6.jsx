class SearchBoxView extends React.Component {

  handleSearch(event) {
    event.preventDefault();

    let form = this.refs.searchQuery.value;
    let url = 'http://www.omdbapi.com/?s=' + form;

    $.ajax({
      url: url,
      method: 'GET'
    }).done(function(response) {
      this.props.onSearch(response)
    }.bind(this));
  }

  render() {
    return (
      <form className="movie-search-form" onSubmit={this.handleSearch.bind(this)}>
        <div className="input-field">
          <input id="search" ref="searchQuery" type="search" required />
          <label htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    )
  }
}
