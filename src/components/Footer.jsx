import { Link } from "react-router-dom";
import { SITE } from "../config.js";
import { PROJECTS, waLink } from "../data/projects.js";
import { track } from "../lib/tracking.js";

export const OPEN_COOKIE_PREFS_EVENT = "ace:open-cookie-prefs";

export default function Footer() {
  const openPrefs = () => window.dispatchEvent(new Event(OPEN_COOKIE_PREFS_EVENT));
  return (
    <>
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <img
                className="foot-logo"
                src="/assets/img-002.webp"
                alt="Ace Group logo"
                width="115"
                height="44"
                loading="lazy"
                decoding="async"
              />
              <h3>Ace Group — Channel Partner</h3>
              <p style={{ maxWidth: "44ch" }}>
                Residential and commercial projects by Ace Group across Noida, the Yamuna Expressway and
                Greater Noida West. Enquiries:{" "}
                <a
                  href={"tel:+" + SITE.phoneIntl}
                  data-track="call_click"
                  onClick={() => track("call_click")}
                >
                  {SITE.phoneDisplay}
                </a>
                .
              </p>
            </div>
            <nav aria-label="Projects">
              <h3>Projects</h3>
              <ul>
                {PROJECTS.slice(0, 7).map((p) => (
                  <li key={p.slug}>
                    <Link to={"/projects/" + p.slug}>{p.name}</Link>
                  </li>
                ))}
                <li>
                  <Link to="/projects">View all {PROJECTS.length} projects →</Link>
                </li>
              </ul>
            </nav>
            <nav aria-label="Site">
              <h3>Explore</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/projects">All projects</Link>
                </li>
                <li>
                  <Link to="/about">About Ace Group</Link>
                </li>
                <li>
                  <Link to="/contact">Contact &amp; enquire</Link>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={openPrefs}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      color: "var(--on-dark-muted)",
                      font: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    Cookie preferences
                  </button>
                </li>
                <li>
                  <a href="/sitemap.xml">Sitemap</a> · <a href="/robots.txt">robots.txt</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="disclaimer">
            <p>
              <b>Disclaimer:</b> This website is owned and operated by an <b>authorized channel partner</b>{" "}
              of Ace Group and is <b>not</b> the official website of Ace Group or its subsidiaries. Project
              names, images and details are shown for information only; images on this site are
              representative renders and may differ from the actual project. Prices and availability change
              without notice and are confirmed on enquiry. RERA numbers, where shown, are as listed in
              project sources — please verify the current registration at up-rera.in and on the developer’s
              official website before booking.
            </p>
            <p>© 2026 Ace Group — Authorized Channel Partner. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky mobile actions */}
      <div className="action-bar">
        <a
          className="btn small"
          href={"tel:+" + SITE.phoneIntl}
          data-track="call_click"
          onClick={() => track("call_click")}
        >
          ☎ Call now
        </a>
        <a
          className="btn small wa"
          target="_blank"
          rel="noopener"
          data-track="whatsapp_click"
          onClick={() => track("whatsapp_click")}
          href={waLink("Hi, I'm interested in an Ace Group project.")}
        >
          WhatsApp
        </a>
        <Link className="btn small on-dark" to="/contact">
          Enquire
        </Link>
      </div>
    </>
  );
}
