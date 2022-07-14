import { useState } from "react";
import FormInput from "../../components/FormInput";
import { Link, useNavigate } from "react-router-dom";
import "./LogIn.css";
import axios from "axios";

const baseUrl = "https://tut-tudo-node-api.herokuapp.com";


const LogIn = () => {
  let navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("values", values);
    try {
      const resp = await axios.post(`${baseUrl}/user/signin`, { ...values });
      navigate("/DashBoard", {state: resp.data})
      localStorage.setItem("userInfo", JSON.stringify(resp.data))

      console.log(resp);
    } catch (error) {
      console.log(error.response);
    }
  };
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: " Enter your email",
      errorMessage: "Please enter a valid email",
      required: true,
    },

    {
      id: 2,
      name: "password",
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
