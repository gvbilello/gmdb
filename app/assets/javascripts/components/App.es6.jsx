class App extends React.Component {
  render() {

    return (
      <div className="app-main">
        <h1>GMDb</h1>
        <%= react_component 'SearchBoxView' %>
      </div>
      )
  }
}
