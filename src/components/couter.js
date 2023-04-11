import { React,Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        
    }
    
    increment(){
        // this.setState({
        //     count:this.state.count+1  
                                                        // normal state managemnet
        // })
        // console.log(this.state.count)
        this.setState(prevState =>({
            count:prevState.count+1           // state managemnet with the previous state 
        }))
        console.log(this.state.count)
    }
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render(){
        var val=this.state.count
        if(!val){ val ="Let's Increment this value"}
        else{ val="counter value ==" +val}
        
        return (
            <div>
            <h2>{val}</h2>  
            <button onClick={()=>this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter