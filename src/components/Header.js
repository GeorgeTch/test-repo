export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="../assets/logo.png" alt="Company Logo" />
        </div>
        <nav className="nav-links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
