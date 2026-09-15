"use client";

import { useState, FormEvent } from "react";

export default function BrochureModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error" | "done">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/brochure-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("done");
      window.open(data.url, "_blank", "noopener");
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal modal-wrap" role="dialog" aria-modal="true" aria-labelledby="brochure-modal-title">
        <button className="modal-close" aria-label="Close" onClick={onClose} type="button">
          &times;
        </button>

        {status === "done" ? (
          <>
            <h3 id="brochure-modal-title">You&apos;re all set</h3>
            <p className="form-success">
              The brochure should have opened in a new tab. If it didn&apos;t,{" "}
              <a
                href="https://mxynzemoflahdhgduplt.supabase.co/storage/v1/object/public/brochures/CreatED%20Labs%202026.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                click here
              </a>
              .
            </p>
          </>
        ) : (
          <>
            <h3 id="brochure-modal-title">Get the Brochure</h3>
            <p className="lede">Share a few details and we&apos;ll open the CreatED Labs brochure for you.</p>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="bm-name">Full name</label>
                <input
                  id="bm-name"
                  type="text"
                  required
                  minLength={2}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                />
              </div>
              <div className="field">
                <label htmlFor="bm-email">Email</label>
                <input
                  id="bm-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
              <div className="field">
                <label htmlFor="bm-phone">Phone</label>
                <input
                  id="bm-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="tel"
                />
              </div>
              {status === "error" && <p className="form-error">{error}</p>}
              <div className="modal-actions">
                <button type="submit" className="pill yellow" disabled={status === "submitting"}>
                  {status === "submitting" ? "Sending..." : "Get Brochure"}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
