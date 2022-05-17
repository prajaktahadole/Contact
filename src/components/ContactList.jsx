import React from 'react'; 
import { useState } from 'react';
import AddContact from './AddContact.jsx';
import ContactCard from './ContactCard.jsx';

const initState = [
    {
      id : 1,
      first_name : "Priya",
      last_name :  "heda",
      phone : "+91 147174152",
      email : "priya@gmail.com"

    },
    {
      id : 2,
      first_name : "Raju",
      last_name :  "Sharma",
      phone : "+91 7447174152",
      email : "raja@gmail.com"
    },
    {
      id : 3,
      first_name : "Nad",
      last_name :  "joat",
      phone : "+91 8930474152",
      email : "nad@gmail.com"

    }
  ];


export default function ContactList() {
 
  const [contactList, setContactList] = useState(initState);

  // const List = contactList.map(
  //   item => <div>{item.first_name}</div>
  // )
  // console.log(List)

  const handleClick = (name,  email, phone ) =>{
    setContactList([
      ...contactList,
      {
        //id : contactList.length + 1,
        id : contactList[contactList.length -1].id + 1,
        first_name : name,
        last_name : "",
        email  : email, 
        phone : phone,
      
      }
    ]);
  };
    console.log(contactList);

    const deleteById = (id) =>{
        console.log(id);
        setContactList(contactList.filter(item => item.id !== id));
    };


  return (
    <div >
      <h1>Add to Contact</h1>
      <AddContact handleClick={handleClick} > </AddContact> 
      <br></br>
      <h2>Contact list</h2>
       <div id='insidebox'>
       {contactList.map( (item) => (
        <div key={item.id}>
           <ContactCard 
             id={item.id}
             name={item.first_name} 
             email={item.email } 
             phone={item.phone} 
             onDelete={deleteById}/>
        </div>
      ) )}
         
    </div> 
   
    </div>
  )
}
