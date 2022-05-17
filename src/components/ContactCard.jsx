import React from "react";
import './ContactCard.css';
import trashIcon from "../../trash-icon.png";


const ContactCard = ({id, name, email  , onDelete}) =>{
  return (
    <div id="Contact-main">
    
  
  <div> {name} </div>
  <div> { email } </div>
  <button onClick={() => onDelete(id)}>
    <img src={trashIcon} className="delete-icon" alt="delete-task"></img>
  </button>
    </div>
  );
  
};  


export default ContactCard;
 