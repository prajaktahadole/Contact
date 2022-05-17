import React from "react";
import './ContactCard.css';

const ContactCard = ({id, name, email  , onDelete}) =>{
  return (
    <div id="Contact-main">
    
  
  <div> {name} </div>
  <div> { email } </div>
  <button onClick={() => onDelete(id)}> Delete</button>
    </div>
  );
  
};  


export default ContactCard;
 