import { Route } from 'react-router-dom';
import { useState, useEffect, useNavigate } from 'react';
import Home from "../pages/Home";
import French from "../pages/French";
import Spanish from "../pages/Spanish";
import Italian from "../pages/Italian";
import Show from "../pages/Show";

const Main = (props) => {
    
    //French Route
    const [ french, setFrench ] =useState(null)
    const URLF = "https://lingua-mater.herokuapp.com/french";
    const getFrench = async () => {
        const response = await fetch(URLF);
        const data = await response.json();
        setFrench(data);
    };
    const createFrench = async (card) => {
        await fetch(URLF, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(card)
        })
        getFrench();
    }
    // const updateFrench = async (updatedCard, id) => {
    //     await fetch(URL + id, {
    //       method: 'PUT',
    //       headers: {
    //         'Content-type': 'Application/json'
    //       },
    //       body: JSON.stringify(updatedCard)  
    //     });
    //     getCards();
    // }
    useEffect(() => {getFrench()}, []);
// END FRENCH


// START SPANISH
const URLS = "https://lingua-mater.herokuapp.com/spanish";
const [ spanish, setSpanish ] =useState(null)

    const getSpanish = async () => {
        const response = await fetch(URLS);
        const data = await response.json();
        setSpanish(data);
    };
    const createSpanish = async (card) => {
        await fetch(URLS, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(card)
        })
        getSpanish();
    }
    useEffect(() => {getSpanish()}, []);
   // END SPANISH

    // START ITALIAN
      const URLI = "https://lingua-mater.herokuapp.com/italian";
      const [ italian, setItalian ] =useState(null)
    const getItalian = async () => {
        const response = await fetch(URLI);
        const data = await response.json();
        setItalian(data);
    };
    const createItalian = async (card) => {
        await fetch(URLI, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(card)
        })
        getItalian();
    }
    useEffect(() => {getItalian()}, []);
    // END ITALIAN

    return (
        <div>

            <Route exact path='/'>
                <Home />
            </Route>
            <Route  path='/french'>
                <French french={french} createCards={createFrench}/>
            </Route>
            <Route  path='/spanish'>
                <Spanish spanish={spanish} createCards={createSpanish} />
            </Route>
            <Route  path='/italian'>
                <Italian italian={italian} createCards={createItalian}/>
            </Route> 
           
            <Route path='/show/:id' render={(rp) => (
                <Show 
                {...rp}
                french={french}
                spanish={spanish}
                italian={italian}
                // updateFrench={updateFrench}
                />
            )} />
         </div>
        )   
    }
    
    export default Main;