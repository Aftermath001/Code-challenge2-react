import React,{useState , useEffect} from 'react'
// import bots from '../Components./db.json';
function Bots() {
        const [bots, setBots] = useState([]);
 

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((bots) => setBots(bots));

  }, []);
     

  return (
    <div className='card-container'>Bots
          {bots.map((bot) =>{
             return(
                <div className='card' key ={bot.id}>
                     <div className='card-image'><img src ={bot.avatar_url} alt=''/><br/></div>
                     <div>{bot.name}<br/>
                         {bot.catchphrase}<br/>
                      </div>
                       <div>
                       {bot.health}
                       {bot.damage}
                       {bot.armor}
                       {bot.bot_class}
                       {bot.created_at}
                       {bot.updated_at}
                       </div>
                    
                </div>
             )
                
            })
          }
    </div>
  

  )
}

export default Bots