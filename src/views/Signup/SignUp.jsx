import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput";
import "./SignUp.css";

const SignUp = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  //inputs array
  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "Firstname*",
      label: "Enter your first name",
      required: true,
    },

    {
      id: 2,
      name: "lastname ",
      type: "text",
      placeholder: "Lastname*",
      label: "Enter your last name",
      errorMessage: "Name cannot be blank ",
      required: true,
    },
    {
      id: 3,
      name: "email ",
      type: "email",
      placeholder: "Email*",
      label: " Enter your email",
      errorMessage: "Please enter a valid email",
      required: true,
    },
    {
      id: 4,
      name: "birthday",
      type: "date",
      placeholder: "Date of birth",
      label: "Enter your birth date",
    },

    {
      id: 5,
      name: "password ",
      type: "password",
      placeholder: "password",
      label: "Password",
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword ",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password does not match",
      label: "Confirm password",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //updating the value and getting input values
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
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
