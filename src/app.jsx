class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredMovies: this.props.movies
    };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(query) {
    var q = query.toLowerCase();
    let filteredMovies = this.props.movies.filter(({ title }) => {
      return title.toLowerCase().indexOf(q) !== -1;
    });
    this.setState({ filteredMovies });
  }

  showMovies() {
    if (this.state.filteredMovies.length > 0) {
      return (
        <div className="list-group">
          {this.state.filteredMovies.map(movie => (
            <MovieItem key={movie.title} movie={movie} />
          ))}
        </div>
      );
    } else {
      return (
        <div className="container">
          <p id="noMovies" className="alert alert-danger">
            No movies found by that name
          </p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container-flex">
        <Nav onSearch={this.onSearch} />
        {this.showMovies()}
      </div>
    );
  }
}
