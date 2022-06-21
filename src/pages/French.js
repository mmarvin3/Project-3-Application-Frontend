import { useState } from 'react';
import { Link } from 'react-router-dom';

const French = (props) => {
    const [ newForm, setNewForm] = useState({
        mater: '',
        image: '', 
        translation: ''
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
    };

    const loaded = () => {
        return props.french.map(card => (
            <li key={card._id} className="card">
                <Link to={`/show/${card._id}`}>
                    <h1>{card.mater}</h1>
                </Link>
            </li>
        )); 
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h2>Mater</h2>
                <input
                value={newForm.mater}
                onChange={handleChange}
                name="mater"
                type="text"
                />
                <h2>Translation</h2>
                <input
                value={newForm.translation}
                onChange={handleChange}
                name="translation"
                type="text"
                />
                <h2>Picture</h2>
                <input
                value={newForm.image}
                onChange={handleChange}
                name="image"
                type="text"
                />
                <input 
                type="submit" value="Create Card" />
            </form>
            { props.french ? <ol style={{textAlign: "left"}}>{loaded()}</ol> : <ol>{loading()}</ol>}
        </section>
    )
}




export default French;