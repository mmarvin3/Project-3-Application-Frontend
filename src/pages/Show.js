
const Show = (props) => {
const id = props.match.params.id;
const card = props.cards.find(p => p._id === id)
    return (
        <div>
            <h3> {card.language}</h3>
            <h3> {card.mater}</h3>
            <h3> {card.translation}</h3>
            <h3> {card.image}</h3>
        </div>
    )
}

export default Show;
