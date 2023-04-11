import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Message from './components/message';
import  C from "./components/couter";
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/classClick'
import EventBind from './components/EventBind'
import ChildComponent from './components/ChildComponent';
import ParentComponents from './components/ParentComponents';
function App() { 
  return (
    <div className="App">
      {/* <ParentComponents/> */}
     {/* <Greet></Greet> */}
    {/* <Greet name="Bruce"  heroname="TOBIRAMA">
      <p>This is a child class </p>
      <button type="">Click To Join Allied Shinobi Forces</button>
      </Greet>
    <Greet name="Adam"><button type="submit">BAKA</button></Greet>
  
    <Welcome name="pickachu"></Welcome> */}
    {/* <Message></Message> */}
    <C></C>
    {/* <FunctionClick></FunctionClick>
    <br></br>
    <ClassClick></ClassClick> */}
    {/* <EventBind></EventBind> */}
    </div>
  );
}

export default App;
