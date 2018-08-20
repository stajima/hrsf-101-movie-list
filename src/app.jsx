class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMovies: this.props.movies,
      filteredMovies: this.props.movies,
      search: '',
      tab: 'unwatched'
    };
    this.filterMovies = this.filterMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.toggleWatched = this.toggleWatched.bind(this);
  }

  componentWillMount() {
    this.filterMovies();
  }

  showMovies() {
    if (this.state.filteredMovies.length > 0) {
      return this.state.filteredMovies.map((movie, index) => (
        <MovieItem
          key={index}
          movie={movie}
          toggleWatched={this.toggleWatched}
          index={index}
        />
      ));
    } else {
      return (
        <a
          href="#"
          className="list-group-item list-group-item-action flex-column align-items-start"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">No movies found by that name</h5>
          </div>
        </a>
      );
    }
  }

  addMovie(title) {
    const allMovies = [...this.state.allMovies, { title, watched: false }];
    this.setState({ allMovies }, this.filterMovies);
  }

  toggleWatched(index) {
    let filteredMovies = [...this.state.filteredMovies];
    filteredMovies[index].watched = !filteredMovies[index].watched;
    this.setState({ filteredMovies }, this.filterMovies);
  }

  filterMovies(tabName = this.state.tab, query = this.state.search) {
    const tab = tabName === 'watched';
    const filteredMovies = this.state.allMovies.filter(
      ({ title, watched }) =>
        watched === tab &&
        (query === '' ||
          title.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    );
    this.setState({ filteredMovies, tab: tabName });
  }

  render() {
    return (
      <div className="container-flex">
        <Nav onSearch={this.filterMovies} />
        <div className="row">
          <div className="col-12">
            <MovieInput addMovie={this.addMovie} />
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  className={
                    'nav-link' +
                    (this.state.tab === 'unwatched'
                      ? ' active bg-primary text-white'
                      : '')
                  }
                  onClick={() => this.filterMovies('unwatched')}
                  href="#"
                >
                  Unwatched
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    'nav-link' +
                    (this.state.tab === 'watched'
                      ? ' active bg-primary text-white'
                      : '')
                  }
                  onClick={() => this.filterMovies('watched')}
                  href="#"
                >
                  Watched
                </a>
              </li>
            </ul>
            <div className="list-group">{this.showMovies()}</div>
          </div>
        </div>
      </div>
    );
  }
}
