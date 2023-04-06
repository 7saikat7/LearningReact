import { React,Component  } from "react";

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:"Let's Change The State !"
         }
    }
    changeMessage(){
        this.setState({
          message:"We will completely uplift your stage bro!"
        })
    } 

    render(){
        return (
       <div> 
        <h3>{this.state.message}</h3>
        <button onClick={() =>this.changeMessage()}>Change The State</button>
        </div>
        )
    }
}

export default Message