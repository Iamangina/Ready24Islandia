import { Outlet, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "./assets/logo.png";
import "./index.css";

export default function Layout() {
  const [open, setOpen] = useState(false);

  const navRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    } 

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="header">
        <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>

        <button
          ref={buttonRef}
          className="menuBtn"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <nav ref={navRef} className={`linksNav ${open ? "active" : ""}`}>
          <Link to="/" className="link" onClick={() => setOpen(false)}>
            Strona Główna
          </Link>

          <Link to="/wyjazdy" className="link" onClick={() => setOpen(false)}>
            Wyjazdy
          </Link>

          <Link to="/szkolenia" className="link" onClick={() => setOpen(false)}>
            Szkolenia
          </Link>

          <Link to="/omnie" className="link" onClick={() => setOpen(false)}>
            O mnie
          </Link>

          <button
            className="rezerwacjaBtn"
            onClick={() => setOpen(false)}
          >
            Zarezerwuj
          </button>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <nav className="linksFooter">
          <Link to="/" className="link">
            Strona Główna
          </Link>

          <Link to="/wyjazdy" className="link">
            Wyjazdy
          </Link>

          <Link to="/szkolenia" className="link">
            Nauka Jazdy
          </Link>

          <Link to="/omnie" className="link">
            O mnie
          </Link>
        </nav>

        <p>
          Design i wykonanie:{" "}
          <a href="https://github.com/Iamangina">
            Angelika Kowalik
          </a>
        </p>
      </footer>
    </>
  );
}