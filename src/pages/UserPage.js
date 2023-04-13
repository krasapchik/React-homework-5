import React from "react";
import { User } from "../components/User";

class UserPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            users: [],
            data: {}
        }
    }

    getUser = async() =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        this.setState({users})
    }
    componentDidMount(){
        this.getUser()
    }
    getUsres =  async(id) =>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const result= await response.json()
        this.setState({data: result})
        console.log(id);
    } 

    
    render(){

        return(
            <>
      <h1>User list</h1>
      <form className="child">
        <ul>id:{this.state.data.id}</ul>
        <li>name:{this.state.data.name}</li>
        <li>username:{this.state.data.username}</li>
        <li>email:{this.state.data.email}</li>
        <li>website:{this.state.data.website}</li>
        
      </form>
      <ul>
      {this.state.users.map((data) => (<User userInfo={data} key={data.id} getUser={this.getUsres}/>))}
        
      </ul>
    
            </>
        )
    }
}

export default UserPage