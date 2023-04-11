import React, { Component } from 'react'
import ChildComp from "./ChildComponent"

export class ParentComponents extends Component {
  constructor(props){
    super(props)

    this.state={
      parentName:"parent"
    }
    this.greetParents=this.greetParents.bind(this)
  }
  greetParents(childname){
    alert(`This name of parents ${this.state.parentName}from ${childname}`)
  }
  // childname is being passed from child class to parent class that's the way they communicate
  render() {
    return (
      <div>
        <ChildComp greetHandler={this.greetParents}></ChildComp>
      </div>
    )
  }
  // here we are passing the functions of parent component as a prop to child
}

export default ParentComponents