import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Show from "./Show";
import Episode from "./Episode";


//PS:The application was created with the show GIRLS instead of the PowerPuffGirls 
// Due to the fact that the url from the powerPuffGirl/episodes was not showing any data

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/" exact component={Show}/>
        <Route path="/episodes/:id" exact component={Episode}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
