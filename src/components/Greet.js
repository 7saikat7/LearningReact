import { React } from "react";

const Greet=(props)=>{
console.log(props)
return (
    <div>
    <h2>{props.name} Bowing  To --- Itachi !{props.heroname}</h2>
    <p>{props.children}</p>
    </div>
)
}


export default Greet;