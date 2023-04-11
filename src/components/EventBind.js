import React, { Component } from 'react'

export class EventBind extends Component {
  constructor(props){
    super(props)

    this.state={
        message:"Hey there ! Hello "
    }
    this.clickHandler=this.clickHandler.bind(this)
    // binding once in the contructor is the best way to bind
  }
  clickHandler(){
    this.setState({
        message:"GoodBye!"
    })
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={this.clickHandler} >Click The Button</button>
        {/* <button onClick={()=> this.clickHandler()} >Click The Button</button> arroe function bining can cause performance issue */}
        {/* <button onClick={this.clickHandler.bind(this)} >Click The Button</button> */} 
        {/* this type of biniding will create a event handler in every render and can lack the performance in the apps*/}
      </div>
    )
  }
}

export default EventBind