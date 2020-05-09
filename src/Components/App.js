import React from 'react';
import Nav from './views/Navigation/Nav';
import Logout from './views/SignIn/Logout';
import {Link,Switch,Router, Route} from 'react-router-dom';
import SignIn from './views/SignIn/SignIn';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignIn}/>
        <Route path="/nav" component={Nav}/>
        <Route path="/logout" component={Logout}/>     
      </Switch>
    </div>
  );
}

export default App;
