import './App.css';
import { Route, Switch } from 'react-router';
import Index from './pages/Index';
import AddURL from './pages/AddURL';
import React from 'react';
import Icon from './components/Icon';



function App() {



  return (
    <React.Fragment>
        <Icon />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/add-url" component={AddURL} />
        </Switch>
    </React.Fragment>
  );

}

export default App;
