import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import logo from "./assets/logo.png";
import "./index.css";

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <Link to="/" className="link"><img src={logo} className="logo" /></Link> 

        <button className="menuBtn" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <nav className={`linksNav ${open ? "active" : ""}`}>
          <Link to="/" className="link">Strona Główna</Link>
          <Link to="/wyjazdy" className="link">Wyjazdy</Link>
          <Link to="/szkolenia" className="link">Szkolenia</Link>
          <Link to="/omnie" className="link">O mnie</Link>
          <button className="rezerwacjaBtn">Zarezerwuj</button>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <nav className="linksFooter">
          <Link to="/" className="link">Strona Główna</Link>
          <Link to="/wyjazdy" className="link">Wyjazdy</Link>
          <Link to="/szkolenia" className="link">Nauka Jazdy</Link>
          <Link to="/omnie" className="link">O mnie</Link>
        </nav>

        <p>
          Design i wykonanie:{" "}
          <a href="https://github.com/Iamangina">Angelika Kowalik</a>
        </p>
      </footer>
    </>
  );
}