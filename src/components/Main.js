import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from "../pages/Home";
import Create from "../pages/Create";
import Index from "../pages/Index";
import Show from "../pages/Show";

const Main = (props) => {
    const [ cards, setCards ] =useState(null)

    const URL = "http://localhost:3000/language/";
    
    const getCards = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setCards(data);
    };

    const createCards = async (card) => {
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(card)
        })
        getCards();
    }

    const updateCards = async (updatedCard, id) => {
        await fetch(URL + id, {
          method: 'PUT',
          headers: {
            'Content-type': 'Application/json'
          },
          body: JSON.stringify(updatedCard)  
        });
        getCards();
    }
    useEffect(() => {getCards()}, []);

    
    return (
        <div>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route  path='/create'>
                <Create cards={cards} createCards={createCards}/>
            </Route>
            {/* <Route path='/index'>
                <Index />
            </Route> */}
            <Route path='/show/:id' render={(rp) => (
                <Show 
                {...rp}
                cards={cards}
                updateCards={updateCards}
                />
            )} />
         </div>
        )   
    }
    
    export default Main;