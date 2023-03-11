
import { Item, Btn, NumberText } from './ContactList.styled';
import { useSelector,useDispatch } from 'react-redux';
import { getFilterContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/options';


export const ContactList = () => {
  const contacts= useSelector(getFilterContacts)

  const dispatch= useDispatch();
  return (
    <>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <Item key={id}>
            <p>
              {name}
              <NumberText>{number}</NumberText>
            </p>
            <Btn onClick={() => dispatch(deleteContact(id))}>Delete</Btn>
          </Item>
        ))}
      </ul>
    </>
  );
  
};

