import { React } from "react";

function FunctionClick(){
    function clickHandler(){
        console.log("Button Clicked")
    }
    return(
        <div>
        <h2>Hey There ! Click The button </h2>
        <button onClick={clickHandler}>Click Here !</button>
        </div>                                                    
                                    //clickHandler() is a function call 
                                    //here we are passing the function only {cliclHandler}
    )
}

export default FunctionClick;