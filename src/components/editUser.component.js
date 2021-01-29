import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
class EditUser extends Component {
    constructor(props){
        super(props);
        //if u r not using arrow function use this
        // this.onChangeDescription=this.onChangeDescription.bind(this);
        this.state={
            username:'',
            description:'',
            duration:0,
            date:new Date(),
            users:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:2300/users/'+this.props.match.params.id)
        .then(res=>{
            this.setState({
                username:res.data.username,
                description:res.data.description,
                duration:res.data.duration,
                date:new Date(res.data.date)
            });
            console.log("data"+res)
        })
    }
    onChangeUsername=(e)=>{
        this.setState({username:e.target.value})
    }
    onChangeDescription=(e)=>{
        this.setState({description:e.target.value})
    }
    onChangeDuration=(e)=>{
        this.setState({duration:e.target.value})
    }
    onChangeDate=(date)=>{
        this.setState({date:date})
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const user={
            username:this.state.username,
            description:this.state.description,
            duration:this.state.duration,
            date:this.state.date
        }
        // console.log(user);
        axios.post('http://localhost:2300/users/'+this.props.match.params.id,user)
        .then(res=>console.log(res.data));

        window.location='/';
       
    }
    render() { 
        return (  
            <div className="container">
                <h3>Edit User</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                        <label>UserName</label>
                        <input type="text" required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}>
                        </input>
                    </div>
                    {/* <div className="form-group">
                        <label>UserName:</label>
                        <select ref="userInput" required 
                        onChange={this.onChangeUsername}
                        value={this.state.username}
                        className="form-control">
                            <option >username</option> */}
                            {/* {this.state.users.map(function(user){
                                return <option key={user} value={user}>{user}
                                </option>
                            })} */}
                        {/* </select> */}
                    {/* </div> */}
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes)</label>
                        <input type="text" required
                        className="form-control"
                        value={this.state.duration}
                        onChange={this.onChangeDuration}>
                        </input>
                    </div>
                    <div className="form-group">
                       <label>Date:</label>
                       <div>
                       <DatePicker selected={this.state.date} onChange={this.onChangeDate}>
                       </DatePicker>
                       </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="update user" className="btn btn-success"></input>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default EditUser;