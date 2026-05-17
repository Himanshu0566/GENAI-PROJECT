import "../auth.form.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { loading, handleLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin({ email, password });
    navigate("/");
  };
  if (loading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }
  return (
    <div>
      <main>
        <div className="form-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                id="email"
                placeholder="enter email address"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                id="password"
                placeholder="enter email address"
              />
            </div>
            <button className="button primary-button">Login</button>
          </form>
          <p>
            Don't have an account? <Link to={"/Register"}>Register</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
