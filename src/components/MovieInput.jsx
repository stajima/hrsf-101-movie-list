class MovieInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitle: ''
    };
  }

  handleChange(movieTitle) {
    this.setState({ movieTitle });
  }

  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add New Movie"
          onChange={event => this.handleChange(event.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => this.props.addMovie(this.state.movieTitle)}
          >
            Add Video
          </button>
        </div>
      </div>
    );
  }
}
