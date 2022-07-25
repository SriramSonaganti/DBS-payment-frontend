
import AuthService from '../services/AuthService';
import React, { useState } from 'react';
import { FormControl,InputLabel,Input,FormHelperText,Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const location = useLocation()
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onPasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password)
   
  }

  const onUsernameChange = (e) => {
    const username = e.target.value;
    setUsername(username);
    console.log(username);
    
  }

  const LoginHandler = (e) => {

    e.preventDefault();
    AuthService.login(username,password).then(
      (response) => {
        
        console.log(response);
        
      },
      (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

            console.log(resMessage);
      },
      navigate('/home'),
    );
   
    
  }
  return (
    <div  className='text-center m-2 p-4'>
      <div ></div>
      <form onSubmit={LoginHandler}>

        <div className='m-4'>
        <FormControl >
          <InputLabel variant='filled'>Username</InputLabel>
            <Input 
              id="outlined-username"
              aria-describedby="username"
              required value={username}
              onChange={onUsernameChange} />
        
        </FormControl>
        </div>
        
        {/* password */}

        <div className='m-4'>
        <FormControl>
          <InputLabel >Password</InputLabel>
          <Input variant="filled" id="outlined-password-input" value={password} onChange={onPasswordChange}
            name="password"
            required
            aria-describedby="my-helper-text" />
          
        </FormControl>
       
        </div>
        <div className='p-3'>
        <Button type='submit' variant='contained'>hello</Button>
        </div>
       

      </form>
 
    </div>
  )
}

export default Login