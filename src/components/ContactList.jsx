import React from 'react'; 
import { useState } from 'react';
import AddContact from './AddContact.jsx';
import ContactCard from './ContactCard.jsx';

const initState = [
    {
      id : 1,
      first_name : "Priya",
      last_name :  "heda",
      phone : "+91 147174152" 

    },
    {
      id : 2,
      first_name : "Raju",
      last_name :  "Sharma",
      phone : "+91 7447174152"

    },
    {
      id : 3,
      first_name : "Nad",
      last_name :  "joat",
      phone : "+91 8930474152"

    }
  ];


export default function ContactList() {
 
  const [contactList, setContactList] = useState(initState);

  // const List = contactList.map(
  //   item => <div>{item.first_name}</div>
  // )
  // console.log(List)

  const handleClick = (name, phone) =>{
    setContactList([
      ...contactList,
      {
        //id : contactList.length + 1,
        id : contactList[contactList.length -1].id + 1,
        first_name : name,
        last_name : "",
        phone : phone
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
      <h2>Contact List</h2>
      {contactList.map( (item) => (
        <div key={item.id}>
           <ContactCard 
             id={item.id}
             name={item.first_name} 
             phone={item.phone}  
             onDelete={deleteById}/>
        </div>
      ) )}
   
    </div>
  )
}
