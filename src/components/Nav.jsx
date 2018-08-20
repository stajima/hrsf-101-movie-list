class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // console.log(event.target.value);
    this.setState({ searchValue: event.target.value });
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src="https://cdn4.iconfinder.com/data/icons/movie-player-line/48/movie_list_playlist-128.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          &emsp; Movie List
        </a>
        <div className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={this.handleChange}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            onClick={() => this.props.onSearch(this.state.searchValue)}
          >
            Search
          </button>
        </div>
      </nav>
    );
  }
}
