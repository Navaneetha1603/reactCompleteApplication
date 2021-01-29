import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

//this function is implemented in react functional compoenent,there is one difference between 
//class and this component is there is no lifecycle methods and state but where as class contain everything

const Exercise=props=>(
    <tr>
        <td>{props.excercise.username}</td>
        <td>{props.excercise.description}</td>
        <td>{props.excercise.duration}</td>
        <td>{props.excercise.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/"+props.excercise._id}>edit</Link> | <a href="http://localhost:3000/" onClick={()=>{props.deleteUser(props.excercise._id)}}>delete</a>
        </td>

    </tr>
)
class UserList extends Component {
    constructor(props){
        super(props);
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:2300/users")
        .then(res=>{this.setState({users:res.data})})
        .catch((err)=>console.log(err));
    }
    deleteUser=(id)=>{
        axios.delete('http://localhost:2300/users/'+id)
        .then(res=>console.log(res.date));
        this.setState({users:this.state.users.filter(el=>el.id!==id)})
    }

    UserList(){
        return this.state.users.map(user=>{
            return <Exercise excercise={user} deleteUser={this.deleteUser} key={user._id}></Exercise>
        })
    }
    render() { 
        return ( 
            <div>
                <h3>User LIst</h3>
                <table className="table table-light">
                <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{this.UserList()}</tbody>
                </table>
               

            </div>
         );
    }
}
 
export default UserList;