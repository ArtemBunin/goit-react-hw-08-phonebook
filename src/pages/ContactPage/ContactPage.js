

import { Box } from "components/App.styled"
import { ContactForm } from "components/ContactForm/ContactForm"
import { ContactList } from "components/ContactList/ContactList"
import { Filter } from "components/Filter/Filter"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from "redux/contacts/options";

export const ContactPage=()=>{
  const dispatch= useDispatch()
useEffect(() => {
  dispatch(fetchContacts());
}, [dispatch]);

    return(<Box>
    <h2>PhoneBook</h2>
      <ContactForm/>
      <h2>Contactlist</h2>
      <Filter/>
      <ContactList/> 
        </Box>

    )
}