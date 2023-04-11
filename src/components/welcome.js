import React,{Component  } from "react";

class Welcome extends Component{
    render(){
        const{name}=this.props
        //const{ state1,state2,state3}=this.state // accessing different elements from state component
        return (
        <h4><i>Susano {name}</i> </h4>
        )
    }
}
export default Welcome;