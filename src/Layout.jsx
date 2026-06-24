import { Outlet, Link } from "react-router-dom";
import logo from "./assets/logo.png";
import "./index.css"

export default function Layout() {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="logo"
          />
        </Link>
        <nav className="linksNav">
          <Link to="/" className="link">Strona Główna</Link>
          <Link to="/wyjazdy" className="link">Wyjazdy</Link>
          <Link to="/" className="link">Nauka Jazdy</Link>
          <Link to="/" className="link">O mnie</Link>
        </nav>
        <Link to="/">
            <button className="rezerwacjaBtn">Zarezerwuj</button>
        </Link>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <nav className="linksFooter">
            <Link to="/" className="link">Strona Główna</Link>
            <Link to="/" className="link">Wyjazdy</Link>
            <Link to="/" className="link">Nauka Jazdy</Link>
            <Link to="/" className="link">O mnie</Link>
        </nav>
        <p>Design i wykonanie: <a href="https://github.com/Iamangina">Angelika Kowalik</a></p>
      </footer>
    </>
  );
}