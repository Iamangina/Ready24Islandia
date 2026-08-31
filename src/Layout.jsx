import { Outlet, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "./assets/logo.png";
import "./index.css";

import { useTranslation } from "react-i18next";
import transl from "./translation";


export default function Layout() {

  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const navRef = useRef(null);
  const buttonRef = useRef(null);

  const changeLanguage = () => {
      const newLanguage = transl.language === "pl" ? "en" : "pl";

      transl.changeLanguage(newLanguage);
      localStorage.setItem("language", newLanguage);
    };

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
            {t("nav.home")}
          </Link>

          <Link to="/wyjazdy" className="link" onClick={() => setOpen(false)}>
            {t("nav.trips")}
          </Link>

          <Link to="/szkolenia" className="link" onClick={() => setOpen(false)}>
            {t("nav.training")}
          </Link>

          <Link to="/omnie" className="link" onClick={() => setOpen(false)}>
            {t("nav.about")}
          </Link>

          <button onClick={changeLanguage} className="languageBtn">
            • {transl.language === "pl" ? "PL" : "EN"} •
          </button>

          <button
            className="rezerwacjaBtn"
            onClick={() => setOpen(false)}
          >
            {t("nav.booking")}
          </button>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <nav className="linksFooter">
          <Link to="/" className="link">
            {t("nav.home")}
          </Link>

          <Link to="/wyjazdy" className="link">
            {t("nav.trips")}
          </Link>

          <Link to="/szkolenia" className="link">
            {t("nav.training")}
          </Link>

          <Link to="/omnie" className="link">
            {t("nav.home")}
          </Link>
        </nav>

        <p>
          {t("nav.design")}{" "}
          <a href="https://github.com/Iamangina">
            Angelika Kowalik
          </a>
        </p>
      </footer>
    </>
  );
}