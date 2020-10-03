import React, { Component } from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import  { Home }  from "./components/home";
const Main = () => (
  <main>
    
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/home" component={Home}/>
    </Switch>
  </main>
  
  
);

export default Main;
