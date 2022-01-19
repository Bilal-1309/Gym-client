import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/features/auth";
import styles from '../SignIn/signin.module.css'

export default function SignIn() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signingIn = useSelector((state) => state.auth.signingIn);
  const error = useSelector((state) => state.auth.error);

  const handleChangeLogin = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(login(email, password));
  };

  return (
    <div className={styles.gradient}>
    <div className={styles.login__box}>
      <h2>Login</h2>
      <form>
        {error}

        <div className={styles.user__box}>
          <input
            type="email"
            name=""
            required=""
            value={email}
            placeholder="email"
            onChange={handleChangeLogin}
          />
        </div>

        <div className={styles.user__box}>
          <input
            type="password"
            value={password}
            onChange={handleChangePassword}
            name=""
            required=""
            placeholder="password"
          />
        </div>

       <button onClick={handleSubmit} disabled={signingIn} className={styles.button5}>
       Login
        </button>
      </form>
    </div>
    </div>
  );
}
