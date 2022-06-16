import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <div className='home'>
            <h1>Mater Lingua</h1>
            <Link to='/index'>
                <div className="french">French</div>
                <div className="spanish">Spanish</div>
                <div className="italian">Italian</div>
                
            </Link>     
        </div>
    )
}

export default Home;