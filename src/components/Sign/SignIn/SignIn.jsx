import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/features/auth";

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
    <div>
      {error}
      <div>
        <input
          type="email"
          placeholder="type email"
          value={email}
          onChange={handleChangeLogin}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="type password"
          value={password}
          onChange={handleChangePassword}
        />
      </div>
      <button onClick={handleSubmit} disabled={signingIn}>
        авторизация
      </button>
    </div>
  );
}
