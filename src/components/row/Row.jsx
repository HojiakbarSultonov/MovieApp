import Modal from 'react-responsive-modal'
import { movies } from '../../constants'
import RowMovies from '../rowMovies/RowMovies'
import './Row.scss'
import MovieInfo from '../movieInfo/MovieInfo'
import { useState } from 'react'
function Row() {
    const [open, setOpen] = useState(false)

    const onToggle = () => setOpen(prev => !prev)
    return (
        <div className='row'>
            <div className="row__top">
                <div className="row__top-title">
                    <img src="/tranding.svg" alt="" />
                    <h1>Trending</h1>
                </div>
                <div className="hr" />
                <a href="#">See more</a>
            </div>
            <div className="row__lists">
                {movies.map((movie, ind) => (
                    <RowMovies key={ind} movie={{ ...movie, ind }} onToggle={onToggle} />
                ))}
            </div>
            {open && <Modal open={open} onClose={onToggle}>
                <MovieInfo />
            </Modal>}
        </div>
    )
}

export default Row