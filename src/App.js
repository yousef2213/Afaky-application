import './App.css';
import { Route, Switch } from 'react-router';
import Index from './pages/Index';
import AddURL from './pages/AddURL';
import React, { useState } from 'react';
import Icon from './components/Icon';
import Setting from './pages/Setting/Setting';

import splash from "./splah.jpg";


function App() {

  const [loader, setLoader] = useState(false);

  if(loader) {
    return (
      <React.Fragment>
          <Icon />
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/add-url" component={AddURL} />
            <Route path="/setting" component={Setting} />
          </Switch>
      </React.Fragment>
    )
  }
  else {
    setTimeout(() => {
      setLoader(true)
    }, 2000);
    return (
      <img src={splash} className="img-splash" />
    )
  }

}

export default App;
