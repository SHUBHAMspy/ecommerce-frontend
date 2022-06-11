import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Input from '../../components/common/inputComponent/Input';
import { signUpUser } from '../../gqloperations/mutations';
import './style.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    // confirmPassword: "",
    
  });

  const [signUp,{loading,error,data}] = useMutation(signUpUser)
  if(error) console.log(JSON.stringify(error, null, 2));
  if(data){
    localStorage.setItem("jwt",data.register.jwt);
    navigate('/')
  }
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    // {
    //   id: 4,
    //   name: "password",
    //   type: "password",
    //   placeholder: "Confirm Password",
    //   errorMessage: "Passwords don't match!",
    //   label: "Confirm Password",
    //   pattern: formData.password,
    //   required: true,
    // },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp({
      variables:{
        input:formData

      }
    })
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup">
      {error && <div className='error-card'>{error.message}</div>}
      <form onSubmit={handleSubmit}>
        <h1 className='signup-heading'>SignUp</h1>
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            value={formData[input.name]}
            onChange={onChange}
          />
        ))}
        <button className='signup-button'>{loading ? 'Signing you ...':'Signup' }</button>
      </form>
    </div>
  )
}

export default SignUp