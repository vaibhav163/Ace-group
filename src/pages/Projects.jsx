import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProjectCard, { SkeletonCards } from "../components/ProjectCard.jsx";
import Seo, { PAGE_SEO } from "../components/Seo.jsx";
import { useToast } from "../components/Toast.jsx";
import { PROJECTS, waLink } from "../data/projects.js";
import { track } from "../lib/tracking.js";

const VALID_CORRIDORS = ["all", "noida-expressway", "yamuna-expressway", "greater-noida-west", "gurugram"];
const TYPE_CHIPS = [
  ["all", "All projects"],
  ["Residential", "Residential"],
  ["Commercial", "Commercial"],
];
const CORRIDOR_CHIPS = [
  ["all", "All corridors"],
  ["noida-expressway", "Noida Expressway"],
  ["yamuna-expressway", "Yamuna Expressway"],
  ["greater-noida-west", "Greater Noida West"],
  ["gurugram", "Gurugram"],
];

export default function Projects() {
  const toast = useToast();
  const [searchParams] = useSearchParams();
  const initialCorridor = searchParams.get("corridor");
  const [type, setType] = useState("all");
  const [corridor, setCorridor] = useState(
    VALID_CORRIDORS.includes(initialCorridor) ? initialCorridor : "all"
  );
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const timers = useRef([]);
  const searchRef = useRef(null);

  useEffect(() => {
    track("page_view", { view: "projects" });
    return () => timers.current.forEach(clearTimeout);
  }, []);

  // Keep the corridor filter in sync if the URL query changes while mounted.
  useEffect(() => {
    const c = searchParams.get("corridor");
    if (c && VALID_CORRIDORS.includes(c)) setCorridor(c);
  }, [searchParams]);

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return PROJECTS.filter(
      (p) =>
        (type === "all" || p.type === type) &&
        (corridor === "all" || p.corridor === corridor) &&
        (!needle ||
          (p.name + " " + p.location + " " + p.config + " " + p.corridorLabel + " " + p.type)
            .toLowerCase()
            .includes(needle))
    );
  }, [type, corridor, q]);

  function animateRender() {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 300);
    timers.current.push(t);
  }
  function pickType(v) {
    setType(v);
    animateRender();
  }
  function pickCorridor(v) {
    setCorridor(v);
    animateRender();
  }
  function onSearch(e) {
    const v = e.target.value;
    const t = setTimeout(() => setQ(v), 180);
    timers.current.push(t);
  }
  function resetFilters() {
    setType("all");
    setCorridor("all");
    setQ("");
    if (searchRef.current) searchRef.current.value = "";
    animateRender();
    toast("Filters cleared — showing all projects.", "ok");
  }

  return (
    <div className="wrap">
      <Seo title={PAGE_SEO.projects.t} description={PAGE_SEO.projects.d} path="projects" />
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true">›</span>
        <span aria-current="page">Projects</span>
      </nav>
      <section className="block" style={{ paddingTop: 18 }} aria-labelledby="proj-h">
        <div className="sec-head">
          <div>
            <h1 id="proj-h" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>
              All Ace Group projects
            </h1>
            <p>
              Filter by type or corridor, or search by name, sector or configuration. Prices are shared on
              request — call or WhatsApp for the current price list.
            </p>
          </div>
        </div>
        <div className="filters" role="group" aria-label="Filter by type">
          {TYPE_CHIPS.map(([v, label]) => (
            <button
              key={v}
              className="chip"
              data-type={v}
              aria-pressed={String(type === v)}
              onClick={() => pickType(v)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="filters" role="group" aria-label="Filter by corridor">
          {CORRIDOR_CHIPS.map(([v, label]) => (
            <button
              key={v}
              className="chip"
              data-corridor={v}
              aria-pressed={String(corridor === v)}
              onClick={() => pickCorridor(v)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="search-row">
          <input
            ref={searchRef}
            type="search"
            placeholder="Search — try “Sector 150”, “3 BHK”, “plots”…"
            aria-label="Search projects"
            onChange={onSearch}
          />
          <span className="result-count" role="status">
            {list.length === PROJECTS.length
              ? "Showing all " + list.length + " projects"
              : "Showing " + list.length + " of " + PROJECTS.length + " projects"}
          </span>
        </div>
        {loading ? (
          <div className="grid" aria-live="polite">
            <SkeletonCards n={3} />
          </div>
        ) : list.length ? (
          <div className="grid" aria-live="polite">
            {list.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h3>No projects match that search</h3>
            <p>
              Try a different sector, configuration or corridor — or ask us and we’ll point you to the
              closest Ace Group match.
            </p>
            <button className="btn ghost" type="button" onClick={resetFilters}>
              Clear filters
            </button>
            <a
              className="btn wa"
              style={{ marginLeft: 8 }}
              target="_blank"
              rel="noopener"
              data-track="whatsapp_click"
              onClick={() => track("whatsapp_click")}
              href={waLink("Hi, I'm looking for an Ace Group project. Please guide me.")}
            >
              Ask on WhatsApp
            </a>
          </div>
        )}
      </section>
    </div>
  );
}
