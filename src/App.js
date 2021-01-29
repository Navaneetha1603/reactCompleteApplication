import React from 'react';
import { BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/navbar.component';
import UserList from './components/userList.component'
import EditUser from './components/editUser.component';
import CreateUser from './components/createUser.component'
function App() {
  return (
    <Router>
      <br/>
      <div className="container">
      <Navbar />
       <Route path="/" exact component={UserList}></Route>
       <Route path="/edit/:id" component={EditUser}></Route>
       <Route path="/create" component={CreateUser}></Route>
    
      </div>
      </Router>
   
    
  );
}

export default App;
