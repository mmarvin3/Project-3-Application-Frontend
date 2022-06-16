import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from "../pages/Home";
import Create from "../pages/Create";

const Main = (props) => {
    return (
        <div>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route  path='/create'>
                <Create />
            </Route>
           
           
        </div>
        )   
    }
    
    export default Main;