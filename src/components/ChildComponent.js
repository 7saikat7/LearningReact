import { React } from "react";

function ChildComponent(props){
 return (
    <div>
        <h2>Hey There Child Component</h2>
        {/* this way we can send data from child to parent via a arrow function so child can not only receive send data too */}
        <button onClick={ () => props.greetHandler("pikachu")}>Click It </button>
        {/* <button onClick={props.greetHandler}>Greet Parents</button> this is ok for receving calls from parent component
    */}
    </div> 
 )
}

export default ChildComponent