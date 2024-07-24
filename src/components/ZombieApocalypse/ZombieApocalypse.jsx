import './ZombieApocalypse.css';

const ZombieApocalypse = (props) => {

return(
    
<ul>
    
   
     <li> name:{props.name} </li>
     <li><span>price: </span>{props.price}</li>
      <li><span>strength: </span>{props.strength}</li>
      <li><span>agility: </span>{props.agility}</li>
      <img src={props.img} alt={props.imgAlt} />
      <button><span>Add</span>{props.add}</button>
    </ul>
)
}

export default ZombieApocalypse;