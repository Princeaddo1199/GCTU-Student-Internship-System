import logoImage from "../assets/gctu-logo.png";
import "../STYLES/LoginPage.css";
import Select, { components } from "react-select";
import { Check, Mail, Lock } from "lucide-react";

const options = [
  { value: "Student / Intern", label: "Student / Intern" },
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
    height: 40,
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
  return (
    <div className="containerMain">
      <div className="formContainer">
        <img className="logoImage" src={logoImage} alt="Logo image" />
        <h3 style={{ marginTop: "10px", color: "#11325f" }}>
          Student Internship System (SIS)
        </h3>
        <p
          style={{
            fontSize: "13px",
            fontWeight: "500",
            margin: "10px 0",
            color: "#4b6b9c",
          }}
        >
          Sign in to your account to continue
        </p>
        <div>
          <p
            style={{ marginTop: "10px", marginBottom: "5px", fontSize: "14px" }}
          >
            Select role
          </p>
          <Select
            options={options}
            styles={customStyles}
            components={{ Option }}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <p
            style={{
              margingleft: "45px",
              marginBottom: "5px",
              fontSize: "14px",
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
          <p
            style={{
              margingleft: "45px",
              marginBottom: "5px",
              fontSize: "14px",
            }}
          >
            Password
          </p>
          <div className="emailInputContainer">
            <Lock size={18} className="emailIcon" />
            <input
              type="password"
              placeholder="**********"
              className="textInput"
            />
          </div>
        </div>
      </div>
      <footer className="copyrightFooter">
        <p>Copyright &copy; 2026 GCTU Intern Track. All rights reserved.</p>
      </footer>
    </div>
  );
}
