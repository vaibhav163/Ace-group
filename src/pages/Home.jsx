import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EnquiryForm from "../components/EnquiryForm.jsx";
import ProjectCard, { SkeletonCards } from "../components/ProjectCard.jsx";
import Seo, { PAGE_SEO } from "../components/Seo.jsx";
import { PROJECTS } from "../data/projects.js";
import { track } from "../lib/tracking.js";

const CORRIDORS = [
  {
    slug: "noida-expressway",
    name: "Noida Expressway",
    text: "Sectors 150–153 and the expressway frontage — home to Parkway, Arte, Starlit, Golfshire, Medalleo and ACE153.",
  },
  {
    slug: "yamuna-expressway",
    name: "Yamuna Expressway",
    text: "The airport-led growth corridor — Verde, Terra, Acreville, Estate, YXP, Hive and Edit.",
  },
  {
    slug: "greater-noida-west",
    name: "Greater Noida West",
    text: "Noida Extension’s family neighbourhoods — Han’ei in Sector 12, Divino, Platinum, City and Aspire.",
  },
  {
    slug: "gurugram",
    name: "Gurugram",
    text: "Sectors 89 & 90 in New Gurugram — ACE Palm Floors, delivered low-rise luxury floors amid nature.",
  },
];

export default function Home() {
  const [featuredReady, setFeaturedReady] = useState(false);
  useEffect(() => {
    track("page_view", { view: "home" });
    const t = setTimeout(() => setFeaturedReady(true), 350);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Seo title={PAGE_SEO.home.t} description={PAGE_SEO.home.d} path="" />
      <section className="hero">
        <img
          className="hero-bg"
          src="/assets/img-001.webp"
          alt="Ace Group luxury residential towers with landscaped greens along the expressway"
          fetchPriority="high"
        />
        <div className="wrap hero-in">
          <h1>
            Homes &amp; workplaces by <em>Ace Group</em>, across Noida’s growth corridors
          </h1>
          <p className="lede">
            Explore the complete Ace Group portfolio — all 23 projects from the developer’s official
            catalogue: ready and upcoming residences, plots and commercial addresses in Sector 150, the
            Noida &amp; Yamuna Expressways, Greater Noida West and Gurugram.
          </p>
          <div className="hero-actions">
            <Link className="btn" to="/projects">
              Browse all projects
            </Link>
            <Link className="btn on-dark" to="/contact">
              Request a callback
            </Link>
          </div>
          <div className="hero-stats" aria-label="Portfolio at a glance">
            <div>
              <b>23</b>
              <span>Projects listed</span>
            </div>
            <div>
              <b>15</b>
              <span>Residential</span>
            </div>
            <div>
              <b>8</b>
              <span>Commercial</span>
            </div>
            <div>
              <b>4</b>
              <span>Growth corridors</span>
            </div>
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="feat-h">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2 id="feat-h">Featured projects</h2>
              <p>
                The addresses buyers ask about most — completed landmarks in Sector 150 and new launches
                along the Yamuna Expressway.
              </p>
            </div>
            <Link className="sec-link" to="/projects">
              View all projects →
            </Link>
          </div>
          <div className="grid" aria-live="polite">
            {featuredReady ? (
              PROJECTS.filter((p) => p.featured).map((p) => <ProjectCard key={p.slug} p={p} eager />)
            ) : (
              <SkeletonCards n={3} />
            )}
          </div>
        </div>
      </section>

      <section className="block" style={{ paddingTop: 0 }} aria-labelledby="corr-h">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2 id="corr-h">Browse by corridor</h2>
              <p>Ace Group builds where the city is growing — pick a corridor to see its projects.</p>
            </div>
          </div>
          <div className="corridors">
            {CORRIDORS.map((c) => (
              <Link className="corridor" key={c.slug} to={"/projects?corridor=" + c.slug}>
                <h3>{c.name}</h3>
                <p>{c.text}</p>
                <p style={{ marginTop: 10 }}>
                  <b>Explore projects →</b>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="block" style={{ paddingTop: 0 }} aria-labelledby="why-h">
        <div className="wrap two-col">
          <div>
            <h2 id="why-h" style={{ fontSize: "clamp(1.7rem,3.4vw,2.4rem)" }}>
              Why buyers look at Ace Group
            </h2>
            <p style={{ color: "var(--muted)", marginTop: 12 }}>
              Ace Group is a Noida-based developer led by Ajay Chaudhary, known for large residential
              townships and commercial projects along the Noida Expressway, Yamuna Expressway and Greater
              Noida West.
            </p>
            <ul className="about-points">
              <li>Delivered landmarks in low-density Sector 150, Noida’s greenest residential sector.</li>
              <li>A portfolio spanning apartments, penthouses, plotted townships and Grade-A offices.</li>
              <li>Early presence on the Yamuna Expressway, the region’s fastest-growing corridor.</li>
            </ul>
            <p style={{ marginTop: 20 }}>
              <Link className="btn ghost" to="/about">
                More about Ace Group
              </Link>
            </p>
          </div>
          <div>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
