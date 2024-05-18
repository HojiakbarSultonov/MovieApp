import './Navbar.scss'
import logo from '/logo.svg'
import logoText from '/logo-text.svg'
function Navbar() {
    return (
        <div className='navbar'>
            <div className="navbar__logo">
                <a href="#">
                    <img src={logo} alt="Logo" />
                    <img src={logoText} alt="Logotext" />
                </a>
            </div>
            <nav className="navbar__menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Tv Shows</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar