import { useEffect } from "react";
import { Link } from "react-router-dom";
import Seo, { PAGE_SEO } from "../components/Seo.jsx";
import { SITE } from "../config.js";
import { track } from "../lib/tracking.js";

export default function About() {
  useEffect(() => {
    track("page_view", { view: "about" });
  }, []);
  return (
    <div className="wrap">
      <Seo title={PAGE_SEO.about.t} description={PAGE_SEO.about.d} path="about" />
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true">›</span>
        <span aria-current="page">About</span>
      </nav>
      <section className="block" style={{ paddingTop: 18 }} aria-labelledby="about-h">
        <div className="two-col">
          <div>
            <h1 id="about-h" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>
              About Ace Group
            </h1>
            <p style={{ color: "var(--muted)", marginTop: 14 }}>
              Ace Group is a Noida-based real estate developer led by Ajay Chaudhary. The group has built
              its name on large residential townships and commercial projects along the Noida Expressway,
              the Yamuna Expressway and in Greater Noida West — the three corridors shaping the region’s
              next decade of growth.
            </p>
            <p style={{ color: "var(--muted)", marginTop: 12 }}>
              Its residential portfolio ranges from golf-facing residences in low-density Sector 150
              (Parkway, Golfshire and the new ACE Arte by Ar. Hafeez Contractor) and expressway apartments
              (Starlit, ACE–Mahagun Medalleo) to neoclassical towers on the Yamuna Expressway (Verde,
              Terra), ultra-luxury homes in Greater Noida West (Han’ei, alongside delivered Divino,
              Platinum, City and Aspire), plotted townships (Acreville, Estate) and low-rise floors in
              Gurugram (Palm Floors). On the commercial side, ACE Capitol brings ready office spaces on
              lease to Sector 132 and ACE Studio to Sector 126, while ACE153, Medley Avenue, City Square,
              YXP, Hive and Edit cover retail, offices and business suites.
            </p>
            <ul className="about-points">
              <li>
                <span>
                  <b>This website</b> is operated by an authorized channel partner of Ace Group — your
                  enquiry comes to us, and we arrange site visits, price lists and booking assistance.
                </span>
              </li>
              <li>
                <span>
                  <b>Developer’s official website:</b>{" "}
                  <a
                    href="http://acegroupindia.com/noida-expressway-projects.php"
                    target="_blank"
                    rel="noopener"
                  >
                    acegroupindia.com
                  </a>{" "}
                  — project details there prevail over anything on this site.
                </span>
              </li>
              <li>
                <span>
                  <b>Looking to buy?</b> Start with the <Link to="/projects">full project list</Link> or{" "}
                  <Link to="/contact">talk to us</Link> about budgets and site visits.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/assets/og-image.jpg"
              alt="Ace Group residential towers at golden hour"
              loading="lazy"
              decoding="async"
              style={{ borderRadius: 18, boxShadow: "var(--shadow)", width: "100%" }}
            />
            <div className="contact-cards" style={{ marginTop: 18 }}>
              <div className="contact-card">
                <h3>Talk to the channel partner desk</h3>
                <p>
                  <a
                    className="big"
                    href={"tel:+" + SITE.phoneIntl}
                    data-track="call_click"
                    onClick={() => track("call_click")}
                  >
                    {SITE.phoneDisplay}
                  </a>
                </p>
                <p>Call or WhatsApp for price lists, availability and site visits.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
