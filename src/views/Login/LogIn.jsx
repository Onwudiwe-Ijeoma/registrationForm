import { useState } from "react";
import FormInput from "../../components/FormInput";
import { Link } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const inputs = [
    {
      id: 1,
      name: "email ",
      type: "email",
      placeholder: "Email",
      label: " Enter your email",
      errorMessage: "Please enter a valid email",
      required: true,
    },

    {
      id: 2,
      name: "password ",
      type: "password",
      placeholder: "password",
      label: "Password",
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="Logincontainer">
      <div className="section1">
        <h1> WELCOME BACK</h1>
        <p> Login to manage your account</p>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <div className="bottom__section">
            <div className="bottom__section1">
              <button className="Loginbtn">Login</button>
            </div>
            <div className="bottom__section2">
              <p>
                Don't have an account yet? &nbsp;
                <Link className="signUpLink" to="/SignUp">
                  Sign up here.
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="section2">
        <img
          src="https://assets.maccarianagency.com/backgrounds/img4.jpg"
          alt="statue"
        />
      </div>
    </div>
  );
};

export default LogIn;
