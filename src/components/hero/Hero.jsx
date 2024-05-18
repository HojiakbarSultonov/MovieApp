import './Hero.scss'
function Hero() {
    return (
        <div className='hero'>
            <div className="hero__info">
                <h2>FIND MOVIES</h2>
                <h1>TV Shows and more</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, sit nobis. At doloremque omnis debitis nobis nulla, voluptatibus voluptas sed ab alias. Dolor numquam odit, quis ut fugiat tenetur voluptatibus.</p>
                <button className='btn btn-primary'>Details</button>
            </div>
            <div className="hero__movie">
                <img src="/image1.svg" alt="img" />
                <div className="hero__movie-descr">
                    <h2>Madellin</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, nulla eum corrupti omnis velit voluptatem repellat cupiditate asperiores perspiciatis nihil earum distinctio labore tempore et expedita totam fugiat nesciunt excepturi.</p>
                    <div>
                        <button className='btn btn-secondary'>Random movie</button>
                        <button className='btn btn-primary'>Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero