import React from 'react';
import './App.css';
import {
 BrowserRouter as Router,
 Route,
 Link
} from 'react-router-dom';
import Home from "./component/Home.js";
import RestaurantCreate from "./component/RestaurantCreate.js";
import RestaurantDetail from "./component/RestaurantDetail.js";
import RestaurantList from "./component/RestaurantList.js";
import RestaurantSearch from "./component/RestaurantSearch.js";
import RestaurantUpdate from "./component/RestaurantUpdate.js";

function App() {
  return (
    <div>
    <h1> Restaurant app </h1>
    <Router>
      <ul>
      <li><Link to="/"> Home</Link></li>
      <li><Link to="/create"> Create</Link></li>
      <li><Link to="/detail"> Detail</Link></li>
      <li><Link to="/list"> List</Link></li>
      <li><Link to="/search"> Search</Link></li>
      <li><Link to="/update"> Update</Link></li>
    </ul>
    <Route path="/create">
    <RestaurantCreate/>
    </Route>
    <Route path="/detail">
    <RestaurantDetail/>
    </Route>
    <Route path="/list">
    <RestaurantList/>
    </Route>
    <Route path="/search">
    <RestaurantSearch/>
    </Route>
    <Route path="/update">
    <RestaurantUpdate/>
    </Route>
    <Route exact path="/">
    <Home/>
    </Route>
    </Router>
    </div>
  );
}

export default App;
