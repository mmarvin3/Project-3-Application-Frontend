import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <nav className="nav">
            <Link to="/">
                <h1>Mater Lingua</h1>
            </Link>
            <div className='nav-block'>
            <Link to="/about">
                <div className="about">About</div>
            </Link>
            <Link to="/create">
                <div className="create">Create New Card</div>
            </Link>
            </div>
        </nav>
    )
}

export default Header;