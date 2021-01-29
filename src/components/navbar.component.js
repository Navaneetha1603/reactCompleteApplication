import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() { 
        return ( 
        //    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        //        <Link to="/" className="navbar-brand">UserTracker
        //        </Link>
        //        <div className="collapse navbar-collapse">
        //             <ul className="navbar-nav mr-auto">
        //                 <li className="navbar-item">
        //                     <Link to="/" className="nav-link">
        //                         Users
        //                     </Link>
        //                 </li>
        //                 <li className="navbar-item">
        //                     <Link to="/create" className="nav-link">
        //                         Create User
        //                     </Link>
        //                 </li>
        //             </ul>
        //        </div>
        //    </nav>

    <nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-expand-lg">
        <ul className="navbar-nav ">
      <li className="navbar-item">
        <Link to="/" className="nav-link">
          Users
        </Link>                 
        </li>
    <li className="navbar-item">
        <Link to="/create" className="nav-link">
        Create User
        </Link>
    </li>
  </ul>
        
      
</nav>
         );
    }
}
 
export default Navbar;