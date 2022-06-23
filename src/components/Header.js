
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Header = (props) => {
  
     return (
         <nav className="nav">

            <Link to="/">
                <img className='logoImage' src='https://i.imgur.com/gi9CrLR.png?1' alt='mater lingua home logo'/>
            </Link>
            <div className='nav-block'>
            <Link to="/about">
                <div className="about">About</div>
            </Link>
            <Link to="/login">
                <div className="create">Login</div>
            </Link>
           
            </div>
        </nav>
    )
}

export default Header;