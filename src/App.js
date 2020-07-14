import React from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'

import './App.css';
import Home from './components/Home'
import RestaurantCreate from './components/RestaurantCreate';
import Login from './components/Login'
import RestaurantList from './components/RestaurantList';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';
import Logout from './components/Logout'
import ProtectedRoutes from './components/ProtectedRoutes'


function App() {
  return (

    <div className="App">
     <Router>
    
       
       <Switch>
       <Route exact path='/' component={Home}/>
       <Route exact path='/create' component={RestaurantCreate}/>
       <Route exact path='/search' component={RestaurantSearch}/>
       <Route exact path='/update/:id' component={RestaurantUpdate}/>
       <Route exact path='/list' component={RestaurantList}/>
       {/*<ProtectedRoutes exact path='/' component={Home}/>
       <ProtectedRoutes exact path='/create' component={RestaurantCreate}/>
       <ProtectedRoutes exact path='/search' component={RestaurantSearch}/>
       <ProtectedRoutes exact path='/update/:id' component={RestaurantUpdate}/>
       <ProtectedRoutes exact path='/list' component={RestaurantList}/>*/}
         {/*<Route path='/login' render={props=>(<Login {...props}/>)}/>
         <Route path='/logout' component={Logout}/>*/}
       </Switch>
       
     </Router>
    </div>
  );
}

export default App;

