import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SITE } from "../config.js";
import { track } from "../lib/tracking.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-head">
      <div className="wrap head-in">
        <Link className="brand" to="/" aria-label="Ace Group — home" onClick={close}>
          <img className="brand-logo" src="/assets/img-002.webp" alt="Ace Group logo" width="100" height="38" />
          {/* <span className="brand-text">
            <span className="brand-name">
              ACE <em>GROUP</em>
            </span>
            <span className="brand-sub">Authorized Channel Partner</span>
          </span> */}
        </Link>
        <button
          className="nav-toggle"
          aria-expanded={String(open)}
          aria-controls="mainNav"
          onClick={() => setOpen((o) => !o)}
        >
          Menu
        </button>
        <nav className={"main-nav" + (open ? " open" : "")} id="mainNav" aria-label="Main">
          <NavLink to="/" end onClick={close}>
            Home
          </NavLink>
          <NavLink to="/projects" onClick={close}>
            Projects
          </NavLink>
          <NavLink to="/about" onClick={close}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={close}>
            Contact
          </NavLink>
        </nav>
        <a
          className="head-call"
          href={"tel:+" + SITE.phoneIntl}
          data-track="call_click"
          onClick={() => track("call_click", { href: "tel:+" + SITE.phoneIntl })}
          aria-label={"Call " + SITE.phoneDisplay}
        >
          <span aria-hidden="true">☎</span>
          <span className="call-label">{SITE.phoneDisplay}</span>
        </a>
      </div>
    </header>
  );
}
