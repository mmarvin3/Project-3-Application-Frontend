import { useState } from 'react';
import { Link } from 'react-router-dom';

const Create = (props) => {
    const [ newForm, setNewForm] = useState({
        languageName: '',
        mater: '',
        translation: '',
        image: '' 
    });

    const handleChange = (event) => {
        setNewForm({
            ...newForm,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createCards(newForm);
        console.log(newForm)
    };

    // const loaded = () => {
    //     return props.language.map(card => (
    //         <li key={card._id} className="card">
    //             <Link to={`/cards/${card.id}`}>
    //                 <h1>{card.name}</h1>
    //             </Link>

    //         </li>
    //     ));
    // }

    // const loading = () => {
    //     return <h1>Loading...</h1>
    // }

    return (
        <section>
            <form onSubmit={handleSubmit}>
               <input
                value={newForm.languageName} 
                onChange={handleChange}
                name = "languageName"
                type="text"
                />
                <input
                value={newForm.mater}
                onChange={handleChange}
                name="mater"
                type="text"
                />
                <input
                value={newForm.translation}
                onChange={handleChange}
                name="translation"
                type="text"
                />
                <input
                value={newForm.image}
                onChange={handleChange}
                name="image"
                type="text"
                />
                <input 
                type="submit" value="Create Card" />
            </form>
            {/* { props.card ? <ol style={{textAlign: "left"}}>{loaded()}</ol> : <ol>{loading()}</ol>} */}
        </section>
    )
}




export default Create;