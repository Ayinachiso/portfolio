"use client";

import { useState, type FormEvent } from "react";
import styles from "./project-note-form.module.css";

export function ProjectNoteForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = [
      `Name: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      `Project type: ${form.get("type")}`,
      `Budget: ${form.get("budget") || "Not sure yet"}`,
      `Timeline: ${form.get("timeline") || "Flexible"}`,
      "",
      "Project note:",
      `${form.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent("A project note from your portfolio")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  return (
    <form className={styles.form} onSubmit={submit}>
      <p className={styles.label}>A note from you</p>
      <h2>Tell me a little about it.</h2>
      <div className={styles.grid}>
        <label>Your name<input name="name" autoComplete="name" required placeholder="What should I call you?" /></label>
        <label>Your email<input type="email" name="email" autoComplete="email" required placeholder="Where can I reply?" /></label>
        <label>What are you thinking?<select name="type" defaultValue=""><option value="" disabled>Pick a starting point</option><option>A new website</option><option>A web app</option><option>Help improving something</option><option>Something else</option></select></label>
        <label>Budget (if you know)<select name="budget" defaultValue=""><option value="">Still figuring it out</option><option>I have a budget in mind</option><option>Still working it out</option><option>Let’s talk first</option></select></label>
        <label className={styles.wide}>The short version<textarea name="message" required placeholder="What are you hoping to make easier, clearer, or more delightful?" rows={5} /></label>
      </div>
      <div className={styles.submitRow}><p>Your email app will open with your note ready to send.</p><button type="submit">Send your note <span aria-hidden="true">↗</span></button></div>
      {sent && <p role="status" className={styles.status}>Your email app should have opened with your note.</p>}
    </form>
  );
}
