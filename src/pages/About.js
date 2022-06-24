
const About = () => {
    return (
        <span>
            <h1  className="page-header">About the Developers</h1>

            <div className="about-container">
                <div className="team">
                    <div className = "developer">
                        <h2> Candace Pinero</h2>
                        <img className="aboutImg" src="https://i.imgur.com/YvCUCqA.jpg" alt="Candace"></img>
                        <p className="about-text">Hello, my name is Candace and I am a software engineer. I was introduced to coding by a friend, and at the time had no experience with coding. I decided to give it a try and found that I actually really enjoyed it. I was working as a team lead at Walmart at the time, and started teaching myself  HTML, CSS, and  javascript on my breaks in my car.<br/> <br/>I joined GA in April of 2022 and started my journey to becoming a software engineer.</p>
                        <a className="icon" href="https://www.linkedin.com/in/candace-pinero-84a6b922b/" target="_blank" rel="noreferrer">
                            <ion-icon name="logo-linkedin" size="large"></ion-icon></a>
                        <a href="https://github.com/candacepinero" target="_blank" rel="noreferrer">
                            <ion-icon name="logo-github" size="large" ></ion-icon>
                        </a>
                    </div>


                    <div className = "developer">
                        <h2> David Barbour</h2>
                        <img className="aboutImg" src="https://i.imgur.com/T9PDIno.png" alt="David"></img>
                        <p className="about-text">David has always had an interest in technology. Much to the consternation of his parents, he broke many electronics as a small child. His curiosity for how things worked led him to take apart things and try (with varying degrees of success) to put them back together. It is this curiosity and desire to build that has led David into Software engineering. <br/> <br/>With a passion for helping people, he explores the possibilities of knowledge, technology, and creation.</p>
                        <a href="https://www.linkedin.com/in/david-barbour/" target="_blank" rel="noreferrer">
                            <ion-icon name="logo-linkedin" size="large"></ion-icon>
                        </a>
                        <a href="https://github.com/BarbourD" target="_blank" rel="noreferrer">
                            <ion-icon name="logo-github" size="large"></ion-icon>
                        </a>
                    </div>


                    <div className = "developer">
                        <h2> Essence Fuller</h2>
                        <img className="aboutImg"src="https://i.imgur.com/k5kNtro.jpg?1" alt="Essence"></img>
                        <p className="about-text">Engineer by day, salsa-dancing adventurer, that also bakes, by night. As the severity of the pandemic has decreased, I've
                            slowly rejoined society
                            and am taking every opportunity to travel, dance, cook, and code with developers, such as my fantastic team here.
                            <br/> <br/>I'm a service-oriented career changer who's moved from working with San Francisco's homeless veterans,
                            to creating applications such as Lingua Mater, in order to serve the diverse needs of local and global communities alike.</p>
                        <a href="https://www.linkedin.com/in/essencefuller/" target="_blank" rel="noreferrer">
                            <ion-icon name="logo-linkedin" size="large"></ion-icon>
                        </a>
                        <a href="https://github.com/eufuller" target="_blank" rel="noreferrer">
                            <ion-icon name="logo-github" size="large"></ion-icon>
                        </a>
                    </div>


                    <div className = "developer">
                        <h2> Marvin Merida</h2>
                        <img className="aboutImg" src="https://i.imgur.com/0gsV0B1.jpg" alt="Marvin"></img>
                        <p className="about-text">I'm a software engineer with a background in civil engineering. I enjoy creating and developing products and applications that not only provide great service, but also look great aesthetically using CSS, HTML, and Javascript. I thrive in fast-paced environments that require collaborative problem solving. <br/> <br/>An engineer at heart, I enjoy being on a motivated container working together to find solutions and consistently meet goals. </p>
                        <a href="https://www.linkedin.com/in/marvin-merida/" target="_blank" rel="noreferrer">
                            <ion-icon name="logo-linkedin" size="large"></ion-icon>
                        </a>
                        <a href="https://github.com/mmarvin3" target="_blank" rel="noreferrer">
                            <ion-icon name="logo-github" size="large"></ion-icon>
                        </a>
                    </div>
                </div>
            </div>
        </span>
    )
}

export default About;
