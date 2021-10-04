import './App.css';
import React,{useEffect ,useState} from 'react';
import {Route, Switch} from 'react-router-dom'
import Rooms from './components/Pages/Rooms/rooms';
import SingleRoomDetails from './components/Pages/SingleRoomDetailes/singleRoomDetails';
import Home from './components/Pages/home';
import NavBar from './components/NavBar/NavBar';

function App() {
  
  return (
    <React.Fragment>

    <NavBar></NavBar>

    <Switch>
     <Route exact path="/" component={Home}></Route>
     <Route exact path="/rooms" component={Rooms}></Route>
     <Route path="/rooms/:id" component={SingleRoomDetails}></Route>
     </Switch>

     </React.Fragment>
  );
}
export default App;
