import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../../redux/features/auth";
import styles from '../SignUp/signup.module.css'

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signingUp = useSelector((state) => state.auth.signingUp);
  const error = useSelector((state) => state.auth.error);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState( "поле ввода не может быть пустым" );
  const [passwordError, setPasswordError] = useState("поле ввода не может быть пустым");
  const [formValid, setFormVAlid] = useState(false);

  const [name, setName] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [nameError, setNameError] = useState("поле ввода не может быть пустым");


  const [weight, setWeight] = useState("");
  const [weightDirty, setWeightDirty] = useState(false);
  const [weightError, setWeightError] = useState("поле ввода не может быть пустым");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(String(e.target.value).toLowerCase())) {
      setEmailError("неправильно введен емейл");
    } else {
      setEmailError("");
    }
  };


  const handleLogin = (e) => {
    e.preventDefault();
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError("пароль должен быть длиннее 3 и меньше 8");
      if (!e.target.value) {
        setPasswordError("поле ввода не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  const nameHandler = (e) => {
    setName(e.target.value);
    if (!e.target.value) {
      setNameError("поле ввода не может быть пустым");
    } else {
      setNameError("");
    }
  };

  const weightHandler = (e) => {
    setWeight(e.target.value);
    if (!e.target.value) {
      setWeightError("поле ввода не может быть пустым");
    } else {
      setWeightError("");
    }
  };

  useEffect(() => {
    if (emailError || passwordError) {
      setFormVAlid(false);
    } else {
      setFormVAlid(true);
    }
  }, [emailError, passwordError]);


  // const handleChangeLogin = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleChangePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  const handleSubmit = () => {
    dispatch(createUser(email, password, name, weight));
    navigate("/signin");
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const blurName = (e) => {
    switch (e.target.name) {
      case "Name":
        setNameDirty(true);
        break;
      case "weight":
        setWeightDirty(true);
        break;
    }
  };

  return (
    <div className={styles.gradient}>
    <div className={styles.login__box} onSubmit={handleLogin}>
      <h2>регистрация</h2>
    <form>
      {error}
      {emailDirty && emailError && (
        <div style={{ color: "red" }}>{emailError}</div>
      )}
      <div className={styles.user__box}>
      <input
        type="email"
        placeholder="type email"
        value={email}
        onChange={(e) => handleChangeEmail(e)}
        onBlur={(e) => blurHandler(e)}
        name="email"
      />
      </div>

      {passwordDirty && passwordError && (
        <div style={{ color: "red" }}>{passwordError}</div>
      )}
      <div className={styles.user__box}>
      <input
        type="password"
        placeholder="type password"
        value={password}
        onChange={(e) => passwordHandler(e)}
        onBlur={(e) => blurHandler(e)}
        name="password"
      />
      </div>

      {nameDirty && nameError && (
        <div style={{ color: "red" }}>{nameError}</div>
      )}
            <div className={styles.user__box}>

      <input
        onBlur={(e) => blurName(e)}
        name="Name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => nameHandler(e)}
      />
      </div>

      {weightDirty && weightError && (
        <div style={{ color: "red" }}>{weightError}</div>
      )}
      <div className={styles.user__box}>

      <input
        onBlur={(e) => blurName(e)}
        name="weight"
        type="number"
        placeholder="weight"
        value={weight}
        onChange={(e) => weightHandler(e)}
      />
      </div>

      <button onClick={handleSubmit} disabled={!formValid} className={styles.button5}> 
      зарегистрироваться 
      </button>
    </form>
    <div className={styles.main}>
    <Link to="/" className={styles.a}>Главное меню</Link>
    </div>
    </div>
    </div>
  );
}
