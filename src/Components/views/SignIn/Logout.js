import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link,Switch, Route} from 'react-router-dom';
import Nav from '../Navigation/Nav-old';
import SignIn from '../SignIn/SignIn';


class Logout extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const navstyle={
            color:'white' 
        }
        return (
            
            <nav>
                <Nav/>
            <ul className="nav-links"></ul>
            <Link style={navstyle} to ='/' >  <ul>Logout</ul> </Link >
                {/* <Switch>
                    <Route exact path="/" component={SignIn}/>
                 </Switch> */}
               
                </nav>
           
        );
    }
}
export default Logout;