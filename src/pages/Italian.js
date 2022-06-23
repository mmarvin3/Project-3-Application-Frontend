import { useState } from 'react';
import { Link } from 'react-router-dom';

const Italian = (props) => {
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
        return props.italian.map(card => (
            showCards?
            <li key={card._id} className="card">
                <Link to={`/show/${card._id}`}>
                    <h1>{card.mater}</h1>
                </Link>
            </li>
             :null
             
        )); 
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    const [showCards, setShowCards] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const [showCreateButton, setShowCreateButton] = useState(true)
   
    function submitAction(){
        setShowCards(true);
        setShowForm(false);
        setShowCreateButton(true);
    }
   
    function createAction(){
        setShowCards(false);
        setShowForm(true);
        setShowCreateButton(false);
    }

    return (
        <section >
            {showForm ?
            <div className="container">
                <div className="sidebar"></div>
                <div className="createForm">
                <form onClick={handleSubmit}>
                
                    <fieldset className="formFields">
                        <legend>Create New Flashcard</legend>
                    <label>
                        <h2>Mater</h2>
                        <input
                            value={newForm.mater}
                            onChange={handleChange}
                            name="mater"
                            type="text"
                            placeholder='ex. Mela'
                        />
                    </label>

                    <label>
                        <h2>Translation</h2>
                        <input
                            value={newForm.translation}
                            onChange={handleChange}
                            name="translation"
                            type="text"
                            placeholder="ex. Apple"
                        />
                    </label>

                    <label>
                        <h2>Picture</h2>
                        <input
                            value={newForm.image}
                            onChange={handleChange}
                            name="image"
                            type="text"
                            placeholder="ex. Your Image Link"
                        />
                    </label>

                    <button
                        className="submit" onClick={() => submitAction()}>Submit</button>
                 </fieldset>
                    </form>
                        </div>
                    </div>
            :null}
            {props.italian ? <ol className="cardDeck" style={{ textAlign: "left" }}>{loaded()}</ol> : <ol>{loading()}</ol>}
            {showCreateButton ?
            <button className="create" onClick={()=>createAction()}>Create New Card</button>
            :null}  
        </section>
    )
}




export default Italian;