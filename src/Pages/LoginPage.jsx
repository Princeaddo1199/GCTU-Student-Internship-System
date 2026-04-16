import logoImage from "../assets/gctu-logo.png";
import "../STYLES/LoginPage.css";
import Select, { components } from "react-select";
import { Check, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const options = [
  { value: "Administrator", label: "Administrator" },
  { value: "Academic Supervisor", label: "Academic Supervisor" },
  { value: "Industry Supervisor", label: "Industry Supervisor" },
];

const Option = (props) => (
  <components.Option {...props}>
    <span
      style={{
        width: 20,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.isFocused ? <Check size={16} /> : null}
    </span>
    {props.label}
  </components.Option>
);

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: 350,
    minHeight: 40,
    height: 45,
    backgroundColor: "#f3f5f7",
    boxShadow: "none",
    border: "1px solid #ccc",
    outline: "none",
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: 35,
    padding: "0 6px",
    backgroundColor: "#f3f5f7",
  }),
  singleValue: (provided) => ({
    ...provided,
    margin: 0,
  }),
  input: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: 40,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#ffc108" : "white",
    color: "black",
  }),
};
export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="containerMain">
      <div className="formContainer">
        <img className="logoImage" src={logoImage} alt="Logo image" />
        <h3 style={{ marginTop: "10px", color: "#11325f" }}>
          Student Internship System
        </h3>
        <h3 style={{ marginTop: "10px", color: "#11325f" }}>(SIS)</h3>
        <p
          style={{
            fontSize: "13px",
            fontWeight: "600",
            margin: "10px 0",
            color: "#4b6b9c",
          }}
        >
          Sign in to your account to continue
        </p>
        <div>
          <p
            style={{
              marginTop: "10px",
              marginBottom: "5px",
              fontSize: "13px",
              fontWeight: "600",
              color: "#4d4c4c",
            }}
          >
            Select role
          </p>
          <Select
            options={options}
            styles={customStyles}
            components={{ Option }}
            defaultValue={options[1]}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <p
            style={{
              margingleft: "45px",
              marginBottom: "5px",
              fontSize: "13px",
              fontWeight: "600",
              color: "#4d4c4c",
            }}
          >
            Email address
          </p>
          <div className="emailInputContainer">
            <Mail size={18} className="emailIcon" />
            <input
              type="email"
              placeholder="you@live.gctu.edu.gh"
              className="textInput"
            />
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <div className="passwordSection">
            <p
              style={{
                margingleft: "45px",
                marginBottom: "5px",
                fontSize: "13px",
                fontWeight: "600",
                color: "#4d4c4c",
              }}
            >
              Password
            </p>
            <span
              role="button"
              onClick={() => alert("Forgot password logic")}
              style={{
                color: "#4b6b9c",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: "600",
                display: "inline-block",
                marginTop: "4px",
              }}
            >
              Forgot Password?
            </span>
          </div>
          <div className="emailInputContainer">
            <Lock size={18} className="emailIcon" />
            <input
              type="password"
              placeholder="**********"
              className="textInput"
            />
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="signInButton"
          >
            Sign In
          </button>
        </div>
        <div className="requestAccount">
          <div>
            <span style={{ fontSize: "12px" }}>New supervisor? </span>
            <span
              role="button"
              onClick={() => alert("request account logic")}
              style={{
                color: "#4b6b9c",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: "600",
                display: "inline-block",
                marginTop: "4px",
              }}
            >
              Forgot Password?
            </span>
          </div>
        </div>
      </div>
      <footer className="copyrightFooter">
        <p>Copyright &copy; 2026 GCTU Intern Track. All rights reserved.</p>
      </footer>
    </div>
  );
}
