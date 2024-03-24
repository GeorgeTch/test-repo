import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="../assets/logo.png" alt="Company Logo" />
          </Link>
        </div>
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
            <li>{/* <Link to="">About Us</Link> */}</li>
            <li></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
