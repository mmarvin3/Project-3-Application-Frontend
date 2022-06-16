import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <div className='home'>
            <h1>Mater Lingua</h1>
            <Link to='/index'>
                <div className="French">French</div>
                <div className="Spanish">Spanish</div>
                <div className="Italian">Italian</div>

            </Link>
        </div>
    )
}

export default Home;