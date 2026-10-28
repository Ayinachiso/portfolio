"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, CalendarDays, Clock3, Video } from "lucide-react";
import styles from "./call-booking.module.css";

const timeZone = "Africa/Lagos";
function todayInLagos() {
  const parts = new Intl.DateTimeFormat("en", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date());
  const get = (type: string) => parts.find(part => part.type === type)?.value ?? "00";
  return `${get("year")}-${get("month")}-${get("day")}`;
}
function clockLabel(hour: number) {
  return `${hour % 12 || 12}:00 ${hour < 12 ? "AM" : "PM"}`;
}

export function CallBooking({ email }: { email: string }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notice, setNotice] = useState("");
  const day = date ? new Date(`${date}T12:00:00Z`).getUTCDay() : null;
  const hours = useMemo(() => day === null ? [] : Array.from({ length: day === 0 ? 8 : 10 }, (_, index) => index + (day === 0 ? 10 : 8)), [day]);
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  function chooseDate(value: string) {
    setDate(value);
    setTime("");
    setNotice("");
  }
  function requestCall() {
    if (!date || !time) { setNotice("Pick a date and a time first, then we’ll get this call on its feet."); return; }
    if (!validEmail) { setNotice("Call requests aren’t connected yet. Send your preferred time through the message form below."); return; }
    const subject = encodeURIComponent("Call request — Ayinachiso’s portfolio");
    const body = encodeURIComponent(`Hi Ayinachiso,\n\nI'd like to request a call on ${date} at ${clockLabel(Number(time))} (${timeZone}).\n\nMy name:\nWhat I'd like to chat about:\n\nI understand this time is confirmed once you reply.`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setNotice("Your email app should open with the request ready. The time is held once Ayinachiso replies.");
  }

  return (
    <section className={styles.card} aria-labelledby="booking-title">
      <span className={styles.sticker}>A good first step</span>
      <div className={styles.heading}>
        <span className={styles.video}><Video size={30} aria-hidden="true" /></span>
        <div><p>Got a knotty idea?</p><h2 id="booking-title">Let’s untangle it on a call.</h2></div>
      </div>
      <p className={styles.copy}>Pick a day and a time that suits. I’ll reply to confirm and share the call details.</p>
      <div className={styles.fields}>
        <label><span><CalendarDays size={18} aria-hidden="true" />Choose a date</span><input type="date" min={todayInLagos()} value={date} onChange={event => chooseDate(event.target.value)} /></label>
        <label><span><Clock3 size={18} aria-hidden="true" />Choose a time</span><select value={time} onChange={event => { setTime(event.target.value); setNotice(""); }} disabled={!date}><option value="">{date ? "Choose a time" : "Choose a date first"}</option>{hours.map(hour => <option key={hour} value={hour}>{clockLabel(hour)}</option>)}</select></label>
      </div>
      <div className={styles.bottom}><p>Mon–Sat, 8am–5pm · Sun, 10am–5pm<br /><span>West Africa Time (Lagos)</span></p><button type="button" onClick={requestCall}>Request a call <ArrowUpRight size={19} aria-hidden="true" /></button></div>
      {notice && <p className={styles.notice} role="status">{notice}</p>}
    </section>
  );
}
