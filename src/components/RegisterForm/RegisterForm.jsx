import { BUTTON, Form, LABEL } from './Regisrt.styled';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { register } from 'redux/auth/operations';
export const RegisterForm = () => {
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [password, Setpassword] = useState('');
  const dispatch = useDispatch();
  const handleChange = e => {
    const { name, value } = e.currentTarget;
   
    switch (name) {
      case 'name': {
        SetName(value);
        break;
      }
      case 'email': {
        SetEmail(value);
        break;
      }
      case 'password': {
        Setpassword(value);
        break;
      }
      default: {
        return;
      }
    }
  };
  const handleSubmit = evt => {
    evt.preventDefault();
dispatch(register({name,email,password}))
    SetName('');
    SetEmail('');
    Setpassword('');
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <LABEL>
        Username
        <input type="text" name="name" placeholder="enter your name"
        required
        onChange={handleChange}
        value={name} />
      </LABEL>
      <LABEL>
        Email
        <input type="email" name="email" placeholder="example@mail.com" 
         onChange={handleChange}
         value={email}/>
      </LABEL>
      <LABEL>
        Password
        <input type="password" name="password"
        required
        onChange={handleChange}
        value={password} />
      </LABEL>
      <BUTTON type="submit">Register</BUTTON>
    </Form>
  );
};
