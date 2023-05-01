import BotCollection from './Components/BotCollection';
import './App.css';
import YourBotArmy from './Components/YourBotArmy';
import { useState } from 'react';

function App() {
  const [out_put,setOutput] = useState([]);
  function getId(incoming){
     setOutput(incoming)
  }
  return (
   
    <div className="App">
       <YourBotArmy output_id={out_put}/>
     <BotCollection incoming={getId} />
    </div>
  );
}

export default App;
