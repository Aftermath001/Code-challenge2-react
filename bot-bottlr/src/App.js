import BotCollection from './Components/BotCollection';
import './App.css';
import YourBotArmy from './Components/YourBotArmy';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("https://bots-database.onrender.com/bots")
      .then((response) => response.json())
      .then((bots) => setBots(bots));
  }, []);

  const addToArmy = (bot) => {
    if (!army.includes(bot)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (bot) => {
    setArmy(army.filter((b) => b !== bot));
  };

  const dischargeBot = (bot) => {
    fetch(`https://bots-database.onrender.com/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then(() => {
        setBots(bots.filter((b) => b !== bot));
        setArmy(army.filter((b) => b !== bot));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <h1> My Army</h1>
      <YourBotArmy army={army} removeFromArmy={removeFromArmy}dischargeBot={dischargeBot}
      />
      <BotCollection bots={bots} addToArmy={addToArmy} />
     
    </div>
  );
}

export default App;

// function App() {
//   const [out_put,setOutput] = useState([]);
//   function getId(incoming){
//      setOutput(incoming)
//   }
//   return (
   
//     <div className="App">
//        <YourBotArmy output_id={out_put}/>
//      <BotCollection incoming={getId} />
//     </div>
//   );
// }

// export default App;
