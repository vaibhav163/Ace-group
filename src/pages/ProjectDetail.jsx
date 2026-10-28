import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EnquiryForm from "../components/EnquiryForm.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Seo from "../components/Seo.jsx";
import { useToast } from "../components/Toast.jsx";
import { SITE } from "../config.js";
import {
  AMENITY_IMGS,
  DETAILS,
  LOCATION_POINTS,
  PROJECTS,
  projectBySlug,
  waLink,
} from "../data/projects.js";
import { submitLead, validName, validPhone } from "../lib/lead.js";
import { track } from "../lib/tracking.js";
import NotFound from "./NotFound.jsx";

/* ---------- helpers ported from js/site.js ---------- */
function iconFor(text) {
  const t = String(text).toLowerCase();
  if (t.includes("golf")) return "⛳";
  if (t.includes("expressway") || t.includes("connectiv") || t.includes("frontage") || t.includes("commute")) return "🛣️";
  if (t.includes("rera") || t.includes("registered")) return "🛡️";
  if (t.includes("completed") || t.includes("ready")) return "🔑";
  if (t.includes("clubhouse")) return "🏛️";
  if (t.includes("pool")) return "🏊";
  if (t.includes("sport") || t.includes("play")) return "🏸";
  if (t.includes("gym") || t.includes("fitness")) return "🏋️";
  if (t.includes("plot") || t.includes("land") || t.includes("township")) return "🗺️";
  if (t.includes("price")) return "🏷️";
  if (t.includes("office") || t.includes("business") || t.includes("commercial") || t.includes("retail") || t.includes("grade-a")) return "🏢";
  if (t.includes("garden") || t.includes("green") || t.includes("landscape") || t.includes("open")) return "🌳";
  if (t.includes("sector") || t.includes("location") || t.includes("noida")) return "📍";
  if (t.includes("bhk") || t.includes("apartment") || t.includes("residence") || t.includes("home") || t.includes("penthouse")) return "🏠";
  return "✦";
}
function ribbonItems(p) {
  const items = [];
  const add = (icon, label, sub) => items.push({ icon, label, sub });
  add(iconFor(p.config), p.config, "Configurations");
  add("📍", p.location, "Location");
  add("🛣️", p.corridorLabel, "Corridor");
  add(iconFor(p.type), p.type, "Project type");
  if (p.status) add("🔑", p.status, "Status");
  if (p.rera) add("🛡️", "RERA Registered", p.rera);
  p.highlights.forEach((h) => {
    if (items.length < 8) add(iconFor(h), h, "Highlight");
  });
  if (items.length < 8) add("🏷️", "Price on request", "On enquiry");
  return items.slice(0, 8);
}
function PlanArt() {
  return (
    <svg width="118" height="88" viewBox="0 0 120 90" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="6" y="6" width="108" height="78" rx="2" />
      <path d="M6 46h44M50 6v78M50 46h28v38M78 62h36M84 6v26h30" />
      <circle cx="99" cy="71" r="6" />
    </svg>
  );
}
function gallerySlides(p) {
  const slides = [{ img: p.img, cap: p.name + " — project elevation (representative render)" }];
  (p.gallery || []).forEach((g) => slides.push({ img: g[0], cap: g[1] }));
  if (slides.length < 4) {
    const keys = [];
    if (/golf/i.test(p.name + " " + p.desc)) keys.push("golf");
    ["clubhouse", "pool", "garden", "sports"].forEach((k) => keys.push(k));
    keys.forEach((k) => {
      if (slides.length < 4 && !slides.some((s) => s.img === AMENITY_IMGS[k].img))
        slides.push({ img: AMENITY_IMGS[k].img, cap: AMENITY_IMGS[k].label + " — representative lifestyle image" });
    });
  }
  return slides;
}
function scrollToEl(el) {
  if (!el) return;
  const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
}

const ANCHORS = [
  ["overview", "Overview"],
  ["amenities", "Amenities"],
  ["floor-plans", "Floor Plans"],
  ["price-list", "Price List"],
  ["gallery", "Gallery"],
  ["location", "Location"],
];

/* ---------- Express Your Interest mini-form ---------- */
function MiniForm({ p }) {
  const toast = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  async function onSubmit(ev) {
    ev.preventDefault();
    const errs = {};
    if (!validName(name)) errs.name = "Please enter your name.";
    if (!validPhone(phone)) errs.phone = "Enter a valid 10-digit mobile number.";
    setErrors(errs);
    if (Object.keys(errs).length) {
      toast("Please fix the highlighted fields and try again.", "err");
      return;
    }
    const payload = {
      name: name.trim(),
      phone: phone.trim(),
      project: p.name,
      message:
        "Express Your Interest form on the " +
        p.name +
        " page — please share the price list, availability and site-visit options.",
      _subject: "New Ace Group enquiry — " + p.name,
      _template: "table",
    };
    setSending(true);
    const sent = await submitLead(payload, p.slug, toast);
    if (sent) {
      setName("");
      setPhone("");
      setErrors({});
    }
    setSending(false);
  }

  return (
    <form className="mini" noValidate onSubmit={onSubmit}>
      <h2 className="serif">Express your interest</h2>
      <p>Get the price list, availability and a site-visit slot for {p.name}.</p>
      <label>
        Your name
        <input
          type="text"
          name="name"
          autoComplete="name"
          placeholder="e.g. Rohit Sharma"
          value={name}
          aria-invalid={String(!!errors.name)}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && (
          <span className="field-err" data-err="name">
            {errors.name}
          </span>
        )}
      </label>
      <label>
        Mobile number
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          inputMode="tel"
          placeholder="10-digit mobile number"
          value={phone}
          aria-invalid={String(!!errors.phone)}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && (
          <span className="field-err" data-err="phone">
            {errors.phone}
          </span>
        )}
      </label>
      <button className="btn" type="submit" disabled={sending}>
        {sending ? "Sending…" : "Request a callback"}
      </button>
      <p className="fineprint" style={{ color: "var(--on-dark-muted)", marginTop: 0 }}>
        Prefer talking? Call{" "}
        <a
          href={"tel:+" + SITE.phoneIntl}
          data-track="call_click"
          onClick={() => track("call_click")}
          style={{ color: "var(--gold-bright)" }}
        >
          {SITE.phoneDisplay}
        </a>
        .
      </p>
    </form>
  );
}

/* ---------- Project detail page ---------- */
export default function ProjectDetail() {
  const { slug } = useParams();
  const p = projectBySlug(slug);
  const toast = useToast();
  const rootRef = useRef(null);
  const [slide, setSlide] = useState(0);

  const d = p ? DETAILS[p.slug] || { tagline: p.desc, plans: [p.config], amenities: [] } : null;
  const slides = useMemo(() => (p ? gallerySlides(p) : []), [p]);
  const related = p
    ? PROJECTS.filter((x) => x.slug !== p.slug && (x.corridor === p.corridor || x.type === p.type)).slice(0, 3)
    : [];

  useEffect(() => {
    setSlide(0);
    if (p) {
      track("project_view", { project: p.slug });
      track("page_view", { view: "project" });
    }
  }, [slug]); // eslint-disable-line react-hooks/exhaustive-deps

  // Keep the sticky anchor bar below the site header and size section
  // offsets — same as the static site's wireDetailPage().
  useEffect(() => {
    if (!p || !rootRef.current) return;
    const head = document.querySelector(".site-head");
    const nav = rootRef.current.querySelector("#anchorNav");
    if (head && nav) {
      nav.style.top = head.offsetHeight + "px";
      const offset = head.offsetHeight + nav.offsetHeight + 16;
      rootRef.current.querySelectorAll(".sec-anchor").forEach((s) => {
        s.style.scrollMarginTop = offset + "px";
      });
      const side = rootRef.current.querySelector(".sticky-side");
      if (side) side.style.top = offset + "px";
    }
  }, [p]);

  if (!p) return <NotFound />;

  const locPoints = LOCATION_POINTS[p.corridor] || [];
  const locImg = /golf/i.test(p.name + " " + p.desc) ? AMENITY_IMGS.golf.img : AMENITY_IMGS.garden.img;
  const lifeImg =
    p.type === "Commercial"
      ? AMENITY_IMGS.clubhouse.img
      : p.slug === "ace-acreville"
        ? AMENITY_IMGS.garden.img
        : AMENITY_IMGS.pool.img;
  const facts = [
    ["Project", p.name],
    ["Type", p.type],
    ["Location", p.location],
    ["Corridor", p.corridorLabel],
    ["Configurations", p.config],
  ];
  if (p.status) facts.push(["Status", p.status]);
  if (p.rera) facts.push(["RERA No.", p.rera]);
  facts.push(["Price", "On request"]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url + "/" },
      { "@type": "ListItem", position: 2, name: "Projects", item: SITE.url + "/projects" },
      {
        "@type": "ListItem",
        position: 3,
        name: p.corridorLabel,
        item: SITE.url + "/projects?corridor=" + p.corridor,
      },
      { "@type": "ListItem", position: 4, name: p.name, item: SITE.url + "/projects/" + p.slug },
    ],
  };

  const gate = (item) => {
    track("gate_request", { project: p.slug, item });
    toast(item + " for " + p.name + " is shared on enquiry — use the form below or WhatsApp us and we’ll send it right away.");
    scrollToEl(rootRef.current && rootRef.current.querySelector("#enquire"));
  };
  const goSlide = (n) => setSlide(((n % slides.length) + slides.length) % slides.length);

  return (
    <div className="wrap" ref={rootRef}>
      <Seo
        title={p.name + " — " + p.location + " | Ace Group"}
        description={
          p.name + ": " + p.config + " at " + p.location + " (" + p.corridorLabel + "). " + p.desc +
          " Price on request — call +91 87997 56026."
        }
        path={"projects/" + p.slug}
        image={p.img}
        jsonLd={jsonLd}
      />
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true">›</span>
        <Link to="/projects">Projects</Link>
        <span aria-hidden="true">›</span>
        <Link to={"/projects?corridor=" + p.corridor}>{p.corridorLabel}</Link>
        <span aria-hidden="true">›</span>
        <span aria-current="page">{p.name}</span>
      </nav>

      {/* ---- Hero ---- */}
      <div className="p-hero">
        <img src={p.img} alt={p.name + " — " + p.location} fetchPriority="high" width="1920" height="820" />
        <div className="p-hero-in">
          <div className="offer-badges">
            {p.status ? <span className="offer-badge green">{p.status} project</span> : null}
            <span className="offer-badge">Price on request</span>
            {p.rera ? <span className="offer-badge ghost">RERA {p.rera}</span> : null}
            <span className="offer-badge ghost">{p.type}</span>
          </div>
          {p.logo ? (
            <img className="p-logo" src={p.logo} alt={p.name + " logo"} width="400" height="266" />
          ) : null}
          <h1>{p.name}</h1>
          <p className="p-tagline">{d.tagline}</p>
          <p className="p-loc">📍 {p.location} · {p.corridorLabel}</p>
        </div>
      </div>

      {/* ---- Sticky anchor nav ---- */}
      <div className="anchor-nav" id="anchorNav">
        <nav aria-label="On this project page">
          {ANCHORS.map(([id, label]) => (
            <a
              key={id}
              href={"#" + id}
              onClick={(e) => {
                e.preventDefault();
                scrollToEl(rootRef.current && rootRef.current.querySelector("#" + id));
              }}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="anchor-cta">
          <a
            className="btn small"
            href={"tel:+" + SITE.phoneIntl}
            data-track="call_click"
            onClick={() => track("call_click")}
          >
            ☎ {SITE.phoneDisplay}
          </a>
          <a
            className="btn small wa"
            target="_blank"
            rel="noopener"
            data-track="whatsapp_click"
            onClick={() => track("whatsapp_click")}
            href={waLink("Hi, I'm interested in " + p.name + " (" + p.location + "). Please share the price list and availability.")}
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* ---- Highlights ribbon ---- */}
      <div className="ribbon" aria-label="Project highlights">
        {ribbonItems(p).map((it, i) => (
          <div className="ribbon-item" key={i}>
            <span className="ric" aria-hidden="true">
              {it.icon}
            </span>
            <b>{it.label}</b>
            <span>{it.sub}</span>
          </div>
        ))}
      </div>

      {/* ---- Overview + sticky Express Your Interest ---- */}
      <section className="block sec-anchor" id="overview" style={{ paddingBottom: 10 }} aria-labelledby="ov-h">
        <div className="detail-grid" style={{ marginTop: 0 }}>
          <div>
            <h2 id="ov-h" style={{ fontSize: "clamp(1.8rem,3.6vw,2.5rem)" }}>
              Overview
            </h2>
            <p className="detail-desc">{p.desc}</p>
            <div className="quick-facts">
              <div className="qf">
                <span>Project type</span>
                <b>{p.type}</b>
              </div>
              <div className="qf">
                <span>Location</span>
                <b>{p.location}</b>
              </div>
              <div className="qf">
                <span>Configurations</span>
                <b>{p.config}</b>
              </div>
            </div>
            <ul className="highlights">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="cta-row">
              <button className="btn" type="button" onClick={() => gate("Brochure")}>
                Download brochure
              </button>
              <button className="btn ghost" type="button" onClick={() => gate("Site visit")}>
                Schedule a site visit
              </button>
            </div>
            <p className="fineprint">
              Brochure, floor plans and the price list for {p.name} are shared on enquiry — tap a button
              above or use the form, and our desk will send them on call / WhatsApp.
            </p>
          </div>
          <div className="sticky-side">
            <MiniForm p={p} />
            <aside className="facts" aria-label="Project facts">
              <h2>Project facts</h2>
              <dl>
                {facts.map(([k, v]) => (
                  <div className="row" key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* ---- Amenities ---- */}
      <section className="block sec-anchor" id="amenities" style={{ paddingTop: 26 }} aria-labelledby="am-h">
        <div className="photo-band">
          <img src={p.img} alt="" loading="lazy" decoding="async" width="1920" height="732" />
          <div className="band-in">
            <h2 id="am-h">Amenities &amp; lifestyle</h2>
            <p>Life at {p.name} — the spaces and settings that come with the address.</p>
          </div>
        </div>
        <div className="amen-grid">
          {d.amenities.map((a) => (
            <article className="amen-card" key={a[1]}>
              <img
                src={AMENITY_IMGS[a[0]].img}
                alt={a[1] + " at " + p.name + " (representative)"}
                loading="lazy"
                decoding="async"
                width="960"
                height="640"
              />
              <h3>{a[1]}</h3>
              <p>{a[2]}</p>
            </article>
          ))}
        </div>
        <p className="fineprint" style={{ textAlign: "center", marginTop: 14 }}>
          Amenity photos are representative lifestyle images for this listing; the project’s final amenity
          list is confirmed in the brochure.
        </p>
      </section>

      {/* ---- Floor plans ---- */}
      <section className="block sec-anchor" id="floor-plans" style={{ paddingTop: 10 }} aria-labelledby="fp-h">
        <div className="sec-title">
          <h2 id="fp-h">Floor plans</h2>
          <p>One plan per configuration at {p.name}. Detailed plans with sizes are shared on enquiry.</p>
        </div>
        <div className="plan-grid" style={{ marginTop: 22 }}>
          {d.plans.map((u) => (
            <article className="plan-card" key={u}>
              <div className="plan-art">
                <PlanArt />
              </div>
              <h3>{u}</h3>
              <p>Layout &amp; sizes shared with the detailed floor plan.</p>
              <button className="btn ghost small" type="button" onClick={() => gate("Floor plan — " + u)}>
                Download floor plan
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* ---- Price list ---- */}
      <section className="block sec-anchor" id="price-list" style={{ paddingTop: 10 }} aria-labelledby="pl-h">
        <div className="sec-title">
          <h2 id="pl-h">Price list</h2>
          <p>
            Current prices for {p.name} are confirmed on enquiry — rates and availability change without
            notice.
          </p>
        </div>
        <div className="price-wrap" style={{ marginTop: 22 }}>
          <table className="price">
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Size</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {d.plans.map((u) => (
                <tr key={u}>
                  <td className="type">{u}</td>
                  <td>On Request</td>
                  <td className="price">On Request</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="cta-row" style={{ justifyContent: "center" }}>
          <button className="btn" type="button" onClick={() => gate("Price list")}>
            Download price list
          </button>
        </div>
      </section>

      {/* ---- Gallery ---- */}
      <section className="block sec-anchor" id="gallery" style={{ paddingTop: 10 }} aria-labelledby="ga-h">
        <div className="sec-title">
          <h2 id="ga-h">Gallery</h2>
        </div>
        <div className="carousel" style={{ marginTop: 22 }}>
          <div className="car-track" style={{ transform: "translateX(-" + slide * 100 + "%)" }}>
            {slides.map((s, i) => (
              <figure className="car-slide" key={i}>
                <img
                  src={s.img}
                  alt={s.cap}
                  {...(i === 0 ? { fetchPriority: "high" } : { loading: "lazy", decoding: "async" })}
                  width="1920"
                  height="960"
                />
                <figcaption>{s.cap}</figcaption>
              </figure>
            ))}
          </div>
          <button
            className="car-btn prev"
            type="button"
            aria-label="Previous gallery image"
            onClick={() => {
              goSlide(slide - 1);
              track("gallery_nav", { project: p.slug, dir: "prev" });
            }}
          >
            ‹
          </button>
          <button
            className="car-btn next"
            type="button"
            aria-label="Next gallery image"
            onClick={() => {
              goSlide(slide + 1);
              track("gallery_nav", { project: p.slug, dir: "next" });
            }}
          >
            ›
          </button>
          <div className="car-dots" role="tablist" aria-label="Gallery images">
            {slides.map((s, i) => (
              <button
                key={i}
                type="button"
                data-slide={i}
                aria-current={String(i === slide)}
                aria-label={"Show image " + (i + 1)}
                onClick={() => goSlide(i)}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Location ---- */}
      <section className="block sec-anchor" id="location" style={{ paddingTop: 10 }} aria-labelledby="lo-h">
        <div className="sec-title">
          <h2 id="lo-h">Location advantages</h2>
          <p>
            {p.location} — on the {p.corridorLabel} corridor.
          </p>
        </div>
        <div className="loc-grid" style={{ marginTop: 22 }}>
          <div className="loc-visual">
            <img
              src={locImg}
              alt={"Around " + p.location + " (representative)"}
              loading="lazy"
              decoding="async"
              width="960"
              height="640"
            />
            <div className="loc-cap">
              <b>{p.location}</b>
              <span>{p.corridorLabel} corridor</span>
            </div>
          </div>
          <div className="loc-cards">
            {locPoints.map((lp) => (
              <div className="loc-card" key={lp[0]}>
                <h3>{lp[0]}</h3>
                <ul>
                  {lp[1].map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Enquire now ---- */}
      <section className="block sec-anchor" id="enquire" style={{ paddingTop: 10 }} aria-labelledby="en-h">
        <div className="sec-title">
          <h2 id="en-h">Enquire now</h2>
          <p>Ask about {p.name} — price list, availability, floor plans and site visits.</p>
        </div>
        <div className="enquire-split" style={{ marginTop: 22 }}>
          <div>
            <EnquiryForm key={p.slug} defaultProject={p.slug} />
          </div>
          <div className="life-img">
            <img
              src={lifeImg}
              alt={"Lifestyle at " + p.name + " (representative)"}
              loading="lazy"
              decoding="async"
              width="960"
              height="960"
            />
          </div>
        </div>
        <p className="fineprint" style={{ marginTop: 16 }}>
          Photos on this page show this project as published by the developer and property portals; renders
          are indicative and the finished project may differ.{" "}
          {p.rera
            ? "RERA No. " + p.rera + " — shown as listed in project sources; please verify the current registration at up-rera.in before booking."
            : "RERA and possession details for this project are shared on enquiry."}
        </p>
      </section>

      {/* ---- Related ---- */}
      {related.length ? (
        <section className="block" style={{ paddingTop: 6, paddingBottom: 10 }} aria-labelledby="rel-h">
          <div className="sec-head">
            <div>
              <h2 id="rel-h">Related projects</h2>
              <p>More Ace Group addresses in the {p.corridorLabel} corridor and similar formats.</p>
            </div>
            <Link className="sec-link" to="/projects">
              All projects →
            </Link>
          </div>
          <div className="grid">
            {related.map((r) => (
              <ProjectCard key={r.slug} p={r} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
