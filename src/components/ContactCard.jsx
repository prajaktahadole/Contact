import React from "react";
import './ContactCard.css';

const ContactCard = ({id, name, phone , onDelete}) =>{
  return (
    <div id="Contact-main">
    
  
  <div> {name} </div>
  <div> {phone} </div>
  <button onClick={() => onDelete(id)}> Delete</button>
    </div>
  );
  
};  


export default ContactCard;
 