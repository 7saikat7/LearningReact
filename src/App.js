import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Message from './components/message';
import  C from "./components/couter";

function App() { 
  return (
    <div className="App">
    {/* <Greet name="Bruce"  heroname="TOBIRAMA">
      <p>This is a child class </p>
      <button type="">Click To Join Allied Shinobi Forces</button>
      </Greet>
    <Greet name="Adam"><button type="submit">BAKA</button></Greet>
    <Greet name="Tsunade"/>
    <Welcome name="pickachu"></Welcome> */}
    {/* <Message></Message> */}
    <C></C>
    </div>
  );
}

export default App;
