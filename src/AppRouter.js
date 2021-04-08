import React from 'react';
import {BrowserRouter as Router,Route, Link, Redirect} from 'react-router-dom'
import Index from './Pages/Index'
import List from './Pages/List'
import Home from './Pages/Home'

function AppRouter() {
    return (
        <Router>
            {/* <Redirect to='/home/' /> */}
            <ul>
                <li>
                    <Link to="/">Index</Link>
                </li>
                <li>
                    <Link to="/list/">List</Link>
                </li>
                
            </ul>
            <Route path="/" exact component={Index} />
            <Route path="/list/:id" component={List} />
            <Route path='/home/' component={Home} />
        </Router>
    )

    
}

export default AppRouter