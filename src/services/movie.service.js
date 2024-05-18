class MovieService {
	_apiBase = 'https://api.themoviedb.org/3'
	_apiLng = 'language=en-US'
	_apiKey = 'api_key=5f8b2fb55a97ff5fdeaca78a41e019c1'
    _apiImg = 'https://image.tmdb.org/t/p/original/'
	getResources = async url => {
		const res = await fetch(url)
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status:${res.status}`)
		}
		return await res.json()
	}
	getPopularMovies = async () => {
		return this.getResources(
			`${this._apiBase}/movie/popular?${this._apiLng}&page=1&${this._apiKey}`
		)
	}
	getTopRated = async () => {
		return this.getResources(
			`${this._apiBase}/movie/top_rated?${this._apiLng}&page=1&${this._apiKey}`
		)
	}
	getDetailedMovie = async id => {
		return this.getResources(
			`${this._apiBase}/movie/${id}?${this._apiLng}&${this._apiKey}`
		)
	}
}

export default MovieService
