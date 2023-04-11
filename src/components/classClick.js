import React, { Component } from 'react'

class classClick extends Component {
  clickHandler(){
    console.log("Class Button Clicked ")
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Class Click Button</button>
      </div>
    )
  }
}

export default classClick