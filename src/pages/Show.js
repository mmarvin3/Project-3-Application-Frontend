
const Show = (props) => {
const idf = props.match.params.id;
const french = props.french.find(p => p._id === idf)

const ids = props.match.params.id;
const spanish = props.spanish.find(p => p._id === ids)

const idi = props.match.params.id;
const italian = props.italian.find(p => p._id === idi)

if ( french !== spanish && french !== italian) { 
return (
        <div>
            <h3> {french.mater}</h3>
            <h3> {french.translation}</h3>
            <h3> {french.image}</h3>
        </div>)
} else if (spanish !== french && spanish !== italian) {
    return (
        <div>
<h3> {spanish.mater}</h3>
<h3> {spanish.translation}</h3>
<h3> {spanish.image}</h3>
</div>
)
} else {
    return (
<div>
     <h3> {italian.mater}</h3>
     <h3> {italian.translation}</h3>
     <h3> {italian.image}</h3> 
 </div>
    )
}
}
export default Show;
