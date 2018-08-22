window.tmdb.callAPI = (success) => {
    $.get(`${window.tmdb.config.url}/discover/movie?sort_by=popularity.desc&api_key=${window.tmdb.config.key}`, (data) => success(data.results));
}