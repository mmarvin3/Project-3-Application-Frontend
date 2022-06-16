import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from "../pages/Home"

const Main = (props) => {
    return (
        <div>
            <Route exact path='/'>
                <Home />
            </Route>
           
           
        </div>
        )   
    }
    
    export default Main;