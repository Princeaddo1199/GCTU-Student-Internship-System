import logoImage from "../assets/gctu-logo.png";
import "../STYLES/LoginPage.css";

export default function LoginPage() {
  return (
    <div className="containerMain">
      <div className="formContainer">
        <img className="logoImage" src={logoImage} alt="Logo image" />
        <h2>Student Internship System</h2>
        <h2>(SIS)</h2>
        <h4>Sign in to your account to continue</h4>
      </div>
      <footer className="copyrightFooter">
        <p>Copyright &copy; 2026 GCTU Intern Track. All rights reserved.</p>
      </footer>
    </div>
  );
}
