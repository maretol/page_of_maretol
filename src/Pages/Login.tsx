import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Scripts/Auth";

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useContext(AuthContext);
  const locationState = location.state as { from: { pathname: string } };
  const from = locationState.from?.pathname || "/";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    auth.signin(username, password, () => {
      // ログイン失敗した処理は別に必要っぽい
      // {replace: true} でブラウザバックによる再ログインページの処理が起きないようにしているらしい
      navigate(from, { replace: true });
    });
  }

  return (
    <div>
      <p>You must log in to view the page at {from}</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="login">
          Username: <input name="username" type="text" />
          Password: <input name="password" type="password" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
