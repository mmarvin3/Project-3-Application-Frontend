import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <div className='home'>
            <h1>Mater Lingua</h1>
            <Link to='/french'>
                <div className="french">French</div>
            </Link>     
            <Link to='/spanish'>
                <div className="spanish">Spanish</div>
            </Link>     
            <Link to='/italian'>
                <div className="italian">Italian</div>
            </Link>     
                
        </div>
    )
}

export default Home;