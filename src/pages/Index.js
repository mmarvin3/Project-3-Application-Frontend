import { Link } from "react-router-dom";

const Index = (props) => {
    // console.log(props)
    const loaded = () => {
        console.log(props.language)
        return props.language.map(card => (
            <li key={card._id} className="card">
                <Link to={`/language/${card.id}`}>
                    <h1>{card.name}</h1>
                </Link> 
             </li>
        ));
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }
    return (
        <div className="div">
            <h1>French</h1>
             { props.card ? <ol style={{textAlign: "left"}}>{loaded()}</ol> : <ol>{loading()}</ol>}
        </div>
    )
}

export default Index