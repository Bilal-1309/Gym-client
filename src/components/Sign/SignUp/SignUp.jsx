import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../redux/features/auth";

export default function SignUp() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState (false)
  const [passwordDirty, setPasswordDirty] = useState (false)
  const [emailError, setEmailError] = useState ('поле ввода не может быть пустым')
  const [passwordError, setPasswordError] = useState ('поле ввода не может быть пустым')
  const [formValid, setFormVAlid] = useState(false)

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
      let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!regEmail.test(String(e.target.value).toLowerCase())){
        setEmailError('Invalid Email');
      } else {
        setEmailError('')
      }
  }


  const passwordHandler = (e) =>{
    setPassword(e.target.value)
    if(e.target.value.length < 3 || e.target.value.length > 8){
      setPasswordError('пароль должен быть длиннее 3 и меньше 8')
  if(!e.target.value){setPasswordError('поле ввода не может быть пустым')}
  

    }else{
      setPasswordError('')
    }
  }

  useEffect(() =>{
    if(emailError || passwordError){
      setFormVAlid(false)
    }else{
      setFormVAlid(true)
    }
   
  },[emailError,passwordError])
  
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");




  const signingUp = useSelector((state) => state.auth.signingUp);
  const error = useSelector((state) => state.auth.error);

  const handleChangeLogin = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(createUser(email, password));
  };


  const blurHandler = (e) =>{
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
        case 'password':
          setPasswordDirty(true)
          break
    }
  }

  return (
    <form>
      {error}
        {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
        <input   type="email" placeholder="type email" value={email}   onChange={(e) => handleChangeEmail(e)}onBlur={e => blurHandler(e)} name='email'/>
         
      {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
        <input type="password" placeholder="type password" value={password} onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} name='password' />

        
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      
      <button onClick={handleSubmit} disabled={!formValid}>
        регистрация
      </button>
    </form>
  );
}
