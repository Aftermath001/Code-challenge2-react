import React,{useState , useEffect} from 'react'
// import YourBotArmy from './YourBotArmy';
// import bots from '../Components./db.json';
function BotCollection() {
        const [bots, setBots] = useState([]);
      //   const[isToggled,setIsToggled] =useState(false);
function handleSubmit(event){
   let id = event.target.id
   console.log(id)
}

  useEffect(() => {
    fetch("https://bots-database.onrender.com/bots")
      .then((res) => res.json())
      .then((bots) => setBots(bots));

  }, []);
     

  return (
    
    <div className='card-container' >
        
          {bots.map((bot) =>{
            const {id,name,avatar_url,health,damage,armor,catchphrase,bot_class,created_at,updated_at}= bot
             return(
               
                <div className='card' key ={id}>
                    <div className='card-name'>
                           <h3>Name: {name}</h3>
                            </div>
                            <div className='card-image'>
                           <img src ={avatar_url} alt=''/>
                           </div>   
                       <div className='card-details'>
                            <p>Health: {health} {"    "}
                                    
                            Damage: {damage} {"    "}
                            Armor: {armor}</p>
                            <p>{catchphrase}</p>
                            <p>Class: {bot_class}</p>
                            <p>D.O.C: {created_at}</p>
                            <p>D.O.U: {updated_at}</p>
                       </div>
                     <div>
                        <button style={{backgroundColor: 'red'}}>X</button>
                        <button onClick={handleSubmit} id={id}>Add to Army </button>
                        </div>  
                       
                </div>
               
             )
                
            })
          }
    </div>
  
   
  )
}

export default BotCollection