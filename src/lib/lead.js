import { SITE } from "../config.js";
import { projectBySlug, waLink } from "../data/projects.js";
import { consent, track } from "./tracking.js";

// Shared lead delivery — ported from the static site's submitLead().
// Email endpoint when configured, otherwise the lead is handed to
// WhatsApp so it is never lost.
export async function submitLead(payload, projectSlug, toast) {
  const projectName = payload.project;
  try {
    if (SITE.formEndpoint) {
      const res = await fetch(SITE.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("send failed");
      track("form_submit", { project: projectSlug, method: "email" });
      if (typeof window.fbq === "function" && consent.marketing)
        window.fbq("track", "Lead", { content_name: projectName });
      toast("Enquiry sent — our desk will call you back shortly.", "ok");
      return true;
    }
    track("form_submit", { project: projectSlug, method: "whatsapp_fallback" });
    toast("Opening WhatsApp to complete your enquiry…", "ok");
    window.open(
      waLink(
        "Hi, I'm " +
          payload.name +
          ". I'm interested in " +
          projectName +
          ". " +
          (payload.message || "Please share details.")
      ),
      "_blank",
      "noopener"
    );
    return true;
  } catch (e) {
    toast("Couldn’t send online — please call " + SITE.phoneDisplay + " or use WhatsApp.", "err");
    track("form_error", { project: projectSlug });
    return false;
  }
}

// Same validation as the static site: name ≥ 2 chars; Indian mobile
// (optional +91), starting 6–9.
export function validPhone(value) {
  return /^[6-9]\d{9}$/.test(value.replace(/[\s+\-]/g, "").replace(/^91/, ""));
}
export function validName(value) {
  return value.trim().length >= 2;
}
export { projectBySlug };
