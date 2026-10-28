import { Link } from "react-router-dom";

// Project card — ported from the static site's cardHTML().
export function projectLocLine(p) {
  return p.location === p.corridorLabel || p.location.endsWith(p.corridorLabel)
    ? p.location
    : p.location + " · " + p.corridorLabel;
}

export default function ProjectCard({ p, eager = false }) {
  return (
    <article className="card">
      <Link className="card-media" to={"/projects/" + p.slug} aria-label={"View " + p.name}>
        <img
          src={p.img}
          alt={p.name + " — " + p.location}
          {...(eager
            ? { fetchPriority: "high" }
            : { loading: "lazy", decoding: "async" })}
          width="960"
          height="640"
        />
        <span className="badge">{p.type}</span>
        {p.status ? (
          <span className="badge done" style={{ left: "auto", right: 12 }}>
            {p.status}
          </span>
        ) : null}
      </Link>
      <div className="card-body">
        <h3>
          <Link to={"/projects/" + p.slug}>{p.name}</Link>
        </h3>
        <p className="card-loc">
          <span aria-hidden="true">📍</span>
          {projectLocLine(p)}
        </p>
        <p className="card-conf">{p.config}</p>
        <p className="card-desc">{p.desc}</p>
        <div className="card-foot">
          <span className="price-note">Price on request</span>
          <Link className="btn small ghost" to={"/projects/" + p.slug}>
            Details →
          </Link>
        </div>
      </div>
    </article>
  );
}

export function SkeletonCards({ n = 3 }) {
  return (
    <>
      {Array.from({ length: n }).map((_, i) => (
        <div className="skel" aria-hidden="true" key={i}>
          <div className="sk-img shimmer"></div>
          <div className="sk-line shimmer"></div>
          <div className="sk-line short shimmer"></div>
          <div className="sk-line shimmer"></div>
        </div>
      ))}
    </>
  );
}
