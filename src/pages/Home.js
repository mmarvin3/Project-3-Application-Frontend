import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <div className='home'>
            <h1>Mater Lingua</h1>
            <Link to='/index'>
                <div>French</div>
            </Link>
        </div>
    )
}

export default Home;