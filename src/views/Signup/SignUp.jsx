import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput";
import "./SignUp.css";
import axios from "axios";

const baseUrl = "https://tut-tudo-node-api.herokuapp.com";

const SignUp = () => {
let navigate = useNavigate(); //used to navigateto the dashboard page

  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    dob: "",
    gender:"",
    password: "",
  });

  //inputs array
  const inputs = [
    {
      id: 1,
      name: "first_name",
      type: "text",
      placeholder: "Firstname*",
       required: true,
    },

    {
      id: 2,
      name: "last_name",
      type: "text",
      placeholder: "Lastname*",
      errorMessage: "Name cannot be blank ",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email*",
      errorMessage: "Please enter a valid email",
      required: true,
    },
    {
      id: 4,
      name: "phone",
      type: "number",
      placeholder: "Phone Number*",
      errorMessage: "Please enter a valid number",
      required: true,
    },
    {
      id: 5,
      name: "dob",
      type: "date",
      placeholder: "Date of birth",
   
    },
    {
      id: 6,
      name: "gender",
      type: "text",
      placeholder: "Gender",
   
    },

    {
      id: 7,
      name: "password",
      type: "password",
      placeholder: "password",
      label: "Password",
      required: true,
    },
    {
      id: 8,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password does not match",
      label: "Confirm password",
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("values", values);
    try {
      const resp = await axios.post(`${baseUrl}/user/signup`, { ...values });
      navigate("/DashBoard", {state: resp.data})
      localStorage.setItem("userInfo", JSON.stringify(resp))
      console.log(resp);
    } catch (error) {
      console.log(error.response);
    }
  };
  //updating the value and getting input values
  const onChange = (e) => {
    console.log("target name", e.target);
    const tempValue = { ...values };
    tempValue[e.target.name] = e.target.value;
    if (e.target.name !== "confirmPassword") {
      setValues({ ...tempValue });
    }
  };

  return (
    <div className="signupContainer">
      <div className="box1">
        <h1> Create an account</h1>

        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <div className="middleSection">
            <div className="middle__Section1">
              <button className="registerButton"> Sign Up</button>
            </div>
            <div className="middle__Section2">
              <p>
                Already have an account? &nbsp;
                <Link className="loginLink" to="/">
                  LogIn
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="box2">
        <img
          src="https://assets.maccarianagency.com/backgrounds/img4.jpg"
          alt=" boy sitting"
        />
      </div>
    </div>
  );
};

export default SignUp;
