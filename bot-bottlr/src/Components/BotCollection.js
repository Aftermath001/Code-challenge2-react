import React from 'react'
import BotCard from "./BotCard";
// import YourBotArmy from './YourBotArmy';
// import bots from '../Components./db.json';
function BotCollection({ bots, addToArmy }) {
   return (
      <div className="bot-collection">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            addToArmy={addToArmy}
            buttonText="Enlist"
          />
        ))}
      </div>
    );
  }
  
  export default BotCollection;
//         
// function handleSubmit(event){
//    let id = event.target.id
//    // create an array if id
//    let alvBotsArr=[...alvBots,id]
//    // Remove the duplicates 
//    let alvBotsArr2=[...new Set(alvBotsArr)]
//    // change the state of empty array
//    setAlvBots(alvBotsArr2)
//    // pass the data from child to parent
//    incoming(alvBots)
//    console.log(id)
// }


//   return (

    
   //  <div className='card-container' >
        
   //        {bots.map((bot) =>{
   //          const {id,name,avatar_url,health,damage,armor,catchphrase,bot_class,created_at,updated_at}= bot
   //           return(
               
   //              <div className='card' key ={id}>
   //                  <div className='card-name'>
   //                         <h3>Name: {name}</h3>
   //                          </div>
   //                          <div className='card-image'>
   //                         <img src ={avatar_url} alt=''/>
   //                         </div>   
   //                     <div className='card-details'>
   //                          <p>Health: {health} {"    "}
                                    
   //                          Damage: {damage} {"    "}
   //                          Armor: {armor}</p>
   //                          <p>{catchphrase}</p>
   //                          <p>Class: {bot_class}</p>
   //                          <p>D.O.C: {created_at}</p>
   //                          <p>D.O.U: {updated_at}</p>
   //                     </div>
   //                   <div>
   //                      <button style={{backgroundColor: 'red'}}>X</button>
   //                      <button onClick={handleSubmit} id={id}>Add to Army </button>
   //                      </div>  
                       
   //              </div>
               
   //           )
                
   //          })
   //        }
   //  </div>
  
   
//   )
// }

// export default BotCollection