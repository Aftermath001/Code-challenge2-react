import React,{useState , useEffect} from 'react'
// import YourBotArmy from './YourBotArmy';
// import bots from '../Components./db.json';
function BotCollection() {
        const [bots, setBots] = useState([]);
      //   const[isToggled,setIsToggled] =useState(false);


  useEffect(() => {
    fetch("https://bots-database.onrender.com/bots")
      .then((res) => res.json())
      .then((bots) => setBots(bots));

  }, []);
     

  return (
    <ol>
    <div className='card-container' >
        
          {bots.map((bot) =>{
             return(
               
                <div className='card' key ={bot.id}>
                    <div className='card-name'>
                           <h3>Name: {bot.name}</h3>
                            </div>
                            <div className='card-image'>
                     <img src ={bot.avatar_url} alt=''/>
                           </div>   
                       <div className='card-details'>
                            <p>Health: {bot.health} {"    "}
                            Damage: {bot.damage} {"    "}
                            Armor: {bot.armor}</p>
                            <p>Class: {bot.bot_class}</p>
                            <p>D.O.C: {bot.created_at}</p>
                            <p>D.O.U: {bot.updated_at}</p>
                       </div>
                     <div>
                        <button style={{backgroundColor: 'red'}}>X</button>
                        </div>  
                       
                </div>
               
             )
                
            })
          }
    </div>
  
   </ol>
  )
}

export default BotCollection