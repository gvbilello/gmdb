class SearchBoxView extends React.Component {

  handleSearch(event) {
    event.preventDefault();
    // debugger;
    // movie and movie should be set to undefined before doing search
    this.props.movie === undefined;
    this.props.movies === undefined;

    let form = this.refs.searchQuery.value;
    let url = 'http://www.omdbapi.com/?s=' + form;

    $.ajax({
      url: url,
      method: 'GET'
    }).done(function(response) {
      // debugger;
      this.props.onSearch(response)
    }.bind(this));
  }

  render() {
    return (
      <form id="search-form" onSubmit={this.handleSearch.bind(this)}>
        <input id="search" ref="searchQuery" type="text" name="query" />
        <input type="Submit" value="Search" />
      </form>
    )
  }
}
