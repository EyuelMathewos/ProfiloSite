import React from 'react';
import {Switch, Route } from 'react-router-dom';
import  { Home }  from "./components/home";
import { Contact } from "./components/contact/contact.js";
const Main = () => (
  <main>
    
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/contact" component={Contact}/>
    </Switch>
  </main>
  
  
);

export default Main;
