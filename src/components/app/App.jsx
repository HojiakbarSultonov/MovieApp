import { Hero, Navbar, Row } from '../'
import MovieService from '../../services/movie.service'

function App() {
    const movieService = new MovieService()
    // movieService.getPopularMovies().then(data => console.log(data))
    // movieService.getTopRated().then(data => console.log(data))
    movieService.getDetailedMovie(278).then(data => console.log(data))
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <Row />
        </div>
    )
}

export default App