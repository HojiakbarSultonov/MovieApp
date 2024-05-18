import './RowMovies.scss'
function RowMovies({ movie, onToggle }) {
    return (
        <div className='movieItem' onClick={onToggle}>
            <img src={movie.image} alt={movie.title} />
            <h2>{movie.title} {movie.ind}</h2>
            <div className="movieItem-descr">
                <p>{movie.date}</p>
                <div className='dot' />
                <p>{movie.duration}</p>
            </div>
        </div>
    )
}

export default RowMovies