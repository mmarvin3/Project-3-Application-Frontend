import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <div className='home'>
            <h1 className='page-header'>Language Decks</h1>
            <div className='homeCards'>
                <Link to='/french'>
                    <div className='languagehHomeCard'>
                        <div className='inner-wrap'>
                            <img className="languageHomePicture" src='https://s3.amazonaws.com/images.skyscrapercenter.com/thumbs/32903_500x650.jpg' alt='French Deck'/>
                            <div className="french">French</div>
                        </div>
                    </div>
                </Link>
                <Link to='/spanish'>
                    <div className='languagehHomeCard'>
                        <div className='inner-wrap'>
                            <img className='languageHomePicture' src='https://mypathintheworld.com/wp-content/uploads/2021/08/Famous-Spanish-landmarks-Sagrada-Familia.jpg' alt='Spanish Deck'/>
                            <div className="spanish">Spanish</div>
                        </div>
                    </div>
                </Link>
                <Link to='/italian'>
                    <div className='languagehHomeCard'>
                        <div className='inner-wrap'>
                            <img className='languageHomePicture' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/The_Leaning_Tower_of_Pisa_SB.jpeg/800px-The_Leaning_Tower_of_Pisa_SB.jpeg' alt='Italian Deck'/>
                            <div className="italian">Italian</div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home;