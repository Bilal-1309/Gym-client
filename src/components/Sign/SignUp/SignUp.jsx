import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../redux/features/auth";

export default function SignUp() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <button onClick={handleSubmit} disabled={signingUp}>
        регистрация
      </button>
    </div>
  );
}
