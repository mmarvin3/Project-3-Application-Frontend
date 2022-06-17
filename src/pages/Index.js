// import { Link } from "react-router-dom";
// import { useState, uesEffect } from 'react-router-dom'

// const Index = (props) => {
//     // console.log(props)
//     const loaded = () => {
//         return props.data.map(card => (
//             <li key={card._id} className="card">
//                 <Link to={`/language/${card._id}`}>
//                     <h1>{card.name}</h1>
//                 console.log(props.card)
//                 </Link> 
//              </li>
//         ));
//     }

//     const loading = () => {
//         return <h1>Loading...</h1>
//     }
//     return (
//         <div className="div">
//             <h1>French</h1>
//              { props.card ? <ol style={{textAlign: "left"}}>{loaded()}</ol> : <ol>{loading()}</ol>}
//         </div>
//     )
// }

// export default Index