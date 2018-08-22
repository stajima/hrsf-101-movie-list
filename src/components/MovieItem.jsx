class MovieItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ showDetails: !this.state.showDetails });
  }

  render() {
    return (
      <a href="#" className="list-group-item list-group-item-action flex-column align-items-start" onClick={this.onClick}>
        <i className={'float-right fa-lg fas fa-arrow-' + (this.state.showDetails ? 'circle-up' : 'circle-down')} />
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{this.props.movie.title}</h5>
        </div>
        <div className={this.state.showDetails ? '' : 'd-none'}>
          <hr />
          <p className="mb-1">
            <strong>Date:</strong> {this.props.movie.release_date}
          </p>
          <p className="mb-1">
            <strong>IMDB Rating:</strong> {this.props.movie.vote_average}
          </p>
          <p className="mb-1">
            <strong>Description:</strong> {this.props.movie.overview}
          </p>
          <img className="poster img-thumbnail float-right" src={window.tmdb.config.imgPath + this.props.movie.poster_path} />
          <button
            type="button"
            className={this.props.movie.watched ? 'btn btn-success' : 'btn btn-light'}
            onClick={() => this.props.toggleWatched(this.props.index)}
          >
            Watched
          </button>
        </div>
      </a>
    );
  }
}
