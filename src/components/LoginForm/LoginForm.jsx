    import { BUTTON, Form,LABEL } from "components/RegisterForm/Regisrt.styled"
    import { useState } from 'react';
    import { useDispatch} from 'react-redux';
    import { logIn } from 'redux/auth/operations';
export const LoginForm=()=>{
    const [email, SetEmail] = useState('');
    const [password, Setpassword] = useState('');
    const dispatch = useDispatch();
    const handleChange = e => {
        const { name, value } = e.currentTarget;
       
        switch (name) {
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
    dispatch(logIn({email,password}))
      
        SetEmail('');
        Setpassword('');
      };
    return(
        <Form onSubmit={handleSubmit} autoComplete="off">
          <LABEL >
            Email
            <input type="email" name="email" 
               onChange={handleChange}
               value={email} />
          </LABEL>
          <LABEL >
            Password
            <input type="password" name="password" 
               onChange={handleChange}
               value={password}/>
          </LABEL>
          <BUTTON type="submit">Log In</BUTTON>
        </Form>
    
        
    )
}