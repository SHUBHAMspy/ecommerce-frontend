import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Input from '../../components/common/inputComponent/Input';
import MobileNavbar from '../../components/mobile/mobileNavbar/MobileNavbar';
import { loginUser } from '../../gqloperations/mutations';
import './style.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const [login,{loading,error,data}] = useMutation(loginUser)
  
  if(error) console.log(JSON.stringify(error, null, 2));

  const inputs = [
    // {
    //   id: 1,
    //   name: "username",
    //   type: "text",
    //   placeholder: "Username",
    //   errorMessage:
    //     "Username should be 3-16 characters and shouldn't include any special character!",
    //   label: "Username",
    //   pattern: "^[A-Za-z0-9]{3,16}$",
    //   required: true,
    // },
    {
      id: 1,
      name: "identifier",
      type: "text",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    
  ];

  useEffect(() => {
    if(data){
      localStorage.setItem("credentials",JSON.stringify({
        "jwt":data.login.jwt,
        "name":data.login.user.username,
        "email":data.login.user.email,
      }));
      navigate('/cart')
    }
  
  }, [data])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      variables:{
        input:formData
      }
    })

  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="login">
        {error && <div className='error-card'>{error.message}</div>}
        <form onSubmit={handleSubmit}>
          <h1 className='login-heading'>Login</h1>
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              value={formData[input.name]}
              onChange={onChange}
            />
          ))}
          <button className='login-button'>{loading ? 'Logging in...' : 'Login'}</button>
        </form>
      </div>
      <MobileNavbar visibility={false}/>
    </>
  )
}

export default Login