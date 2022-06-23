import { useState } from 'react';
import { Link } from 'react-router-dom';

const French = (props) => {
    const [newForm, setNewForm] = useState({
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
            showCards ?
                <li key={card._id} className="card">
                    <Link to={`/show/${card._id}`}>
                        <h1>{card.mater}</h1>
                    </Link>
                </li>
                : null

        ));
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    const [showCards, setShowCards] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const [showCreateButton, setShowCreateButton] = useState(true)

    function submitAction() {
        setShowCards(true);
        setShowForm(false);
        setShowCreateButton(true);
    }

    function createAction() {
        setShowCards(false);
        setShowForm(true);
        setShowCreateButton(false);
    }

    return (
        <section>
            <h1 className='page-header'>French Deck</h1>
            {showForm ?
                <form className="createForm" onClick={handleSubmit}>
                    <div className='field-inline'>
                        <h2 className='form-label'>French Word</h2>
                        <input
                            value={newForm.mater}
                            onChange={handleChange}
                            name="mater"
                            type="text"
                            placeholder='(ex. Bonjour, Chien, Chatte...)'
                        />
                    </div>
                    <div className='field-inline'>
                        <h2 className='form-label'>Translation</h2>
                        <input
                            value={newForm.translation}
                            onChange={handleChange}
                            name="translation"
                            type="text"
                            placeholder='(ex. Hello, Dog, Cat...)'
                        />
                    </div>
                    <div className='field-inline'>
                        <h2 className='form-label'>Picture</h2>
                        <input
                            value={newForm.image}
                            onChange={handleChange}
                            name="image"
                            type="text"
                            placeholder='Add an image URL'
                        />
                    </div>
                    <button
                        className="create" onClick={() => submitAction()}>Submit</button>
                </form>
                : null}
            {props.french ? <ol className="cardDeck" style={{ textAlign: "left" }}>{loaded()}</ol> : <ol>{loading()}</ol>}
            {showCreateButton ?
                <button className="create" onClick={() => createAction()}>Create New Card</button>
                : null}
        </section>
    )
}




export default French;