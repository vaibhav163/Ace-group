import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import CookieConsent from "./components/CookieConsent.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import { ToastProvider } from "./components/Toast.jsx";
import { startPhotoSafety } from "./lib/photoSafety.js";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Projects from "./pages/Projects.jsx";

// The static site scrolled to top on every view change.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

// Legacy URLs: the static site was served at /projects.html, /about.html,
// /contact.html, /projects/<slug>.html (and an earlier build used hash
// routes like #/project/<slug>). Redirect all of them to the clean
// React routes, preserving any query string (e.g. ?corridor=...).
function LegacyRedirects() {
  const location = useLocation();
  const { pathname, search, hash } = location;

  if (hash && hash.startsWith("#/")) {
    const raw = hash.replace(/^#\/?/, "");
    const [pathPart, qs] = raw.split("?");
    const parts = pathPart.split("/").filter(Boolean);
    let to = "/";
    if (parts[0] === "projects") to = "/projects";
    else if (parts[0] === "project" && parts[1]) to = "/projects/" + parts[1];
    else if (parts[0] === "about") to = "/about";
    else if (parts[0] === "contact") to = "/contact";
    else if (parts[0]) to = "/" + parts.join("/");
    return <Navigate to={to + (qs ? "?" + qs : "")} replace />;
  }
  if (pathname.endsWith(".html")) {
    let clean = pathname.replace(/\.html$/, "");
    if (clean === "/index" || clean === "") clean = "/";
    return <Navigate to={clean + search} replace />;
  }
  return null;
}

export default function App() {
  useEffect(() => startPhotoSafety(), []);
  return (
    <BrowserRouter>
      <ToastProvider>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <LegacyRedirects />
        <ScrollToTop />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </ToastProvider>
    </BrowserRouter>
  );
}
