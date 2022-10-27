import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from  './home'

import Users from './users'

function Routes() {
    return(
        <Router>
       
            <Route exact path="/" component={Home}/>

            <Route exact path="/" component={Users}/>
         
         </Router> 
    )
}

export default Routes