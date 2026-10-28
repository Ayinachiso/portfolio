"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { MouseEvent } from "react";
import styles from "./growing-plants.module.css";

type Growth = { side: "left" | "right"; x: number; y: number; reduced: boolean };
type Point = { x: number; y: number };
const clamp = (value: number) => Math.max(0, Math.min(1, value));
const smooth = (value: number) => { const t = clamp(value); return t * t * (3 - 2 * t); };
const variation = (seed: number) => (Math.sin(seed * 127.1 + 311.7) * 43758.5453) % 1;

/** Draw new stems and leaves in growth order; the original corner image never scales. */
function VineCanopy({ growth, onComplete }: { growth: Growth; onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    ctx.scale(ratio, ratio);
    const mirror = growth.side === "right";
    const root = { x: mirror ? width - growth.x : growth.x, y: growth.y };
    const count = width < 700 ? 16 : 24;
    const leafSize = width < 700 ? 54 : 80;
    const vines = Array.from({ length: count }, (_, index) => {
      const topCount = Math.ceil(count * .6);
      const end = index < topCount
        ? { x: (index + .3) / topCount * (width + 160), y: -100 }
        : { x: width + 110, y: (index - topCount + .3) / (count - topCount) * (height + 80) };
      const control1 = { x: root.x + (end.x - root.x) * .12 + variation(index + 3) * 90, y: root.y - height * (.25 + index % 3 * .12) };
      const control2 = { x: end.x * .85, y: end.y + height * (.18 + index % 4 * .07) };
      const distance = Math.hypot(end.x - root.x, end.y - root.y);
      const segments = Math.max(35, Math.ceil(distance / 13));
      const points: Point[] = Array.from({ length: segments + 1 }, (_, step) => {
        const t = step / segments;
        const u = 1 - t;
        const bend = Math.sin(t * Math.PI * (4 + index % 3) + index) * Math.sin(t * Math.PI) * 33;
        const x = u ** 3 * root.x + 3 * u * u * t * control1.x + 3 * u * t * t * control2.x + t ** 3 * end.x + bend;
        return { x: mirror ? width - x : x, y: u ** 3 * root.y + 3 * u * u * t * control1.y + 3 * u * t * t * control2.y + t ** 3 * end.y };
      });
      return { points, delay: index / count * .18, index };
    });

    function leaf(x: number, y: number, angle: number, size: number, shade: number, flower: boolean) {
      if (!ctx || size < .5) return;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      const gradient = ctx.createLinearGradient(0, -size * .3, size, size * .25);
      gradient.addColorStop(0, flower ? "#ede3b9" : ["#436c44", "#527a4b", "#375d3e"][shade % 3]);
      gradient.addColorStop(.5, flower ? "#fff8df" : "#78915a");
      gradient.addColorStop(.53, flower ? "#f0e9cf" : "#355d3c");
      gradient.addColorStop(1, flower ? "#d4c7a0" : "#173e2b");
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(size * .25, -size * .48, size * .76, -size * .32, size, -size * .08);
      ctx.bezierCurveTo(size * .75, size * .05, size * .35, size * .42, 0, 0);
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.strokeStyle = "#203c29";
      ctx.lineWidth = .8;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(size * .5, -size * .02, size * .94, -size * .08);
      for (let i = 1; i < 5; i++) {
        const v = i / 6;
        ctx.moveTo(size * v, 0);
        ctx.lineTo(size * (v + .15), -size * .19);
        ctx.moveTo(size * v, 0);
        ctx.lineTo(size * (v + .12), size * .15);
      }
      ctx.strokeStyle = flower ? "#b7a46c" : "#b3bb7d88";
      ctx.lineWidth = .7;
      ctx.stroke();
      ctx.restore();
    }

    const start = performance.now();
    let frame = 0;
    function draw(now: number) {
      if (!ctx) return;
      const elapsed = now - start;
      const duration = growth.reduced ? 900 : 15500;
      if (elapsed >= duration) { onComplete(); return; }
      // Eight seconds to climb, a short canopy pause, then reverse the growth order.
      const progress = growth.reduced ? .16 : elapsed < 8500 ? elapsed / 8500 : elapsed < 10000 ? 1 : 1 - (elapsed - 10000) / 5500;
      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = growth.reduced ? Math.sin(elapsed / duration * Math.PI) * .65 : 1;
      for (const vine of vines) {
        const reached = clamp((progress - vine.delay) / (1 - vine.delay)) * (vine.points.length - 1);
        if (reached <= 0) continue;
        const last = Math.floor(reached);
        ctx.beginPath();
        ctx.moveTo(vine.points[0].x, vine.points[0].y);
        for (let step = 1; step <= last; step++) ctx.lineTo(vine.points[step].x, vine.points[step].y);
        if (last + 1 < vine.points.length) {
          const a = vine.points[last], b = vine.points[last + 1];
          ctx.lineTo(a.x + (b.x - a.x) * (reached - last), a.y + (b.y - a.y) * (reached - last));
        }
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = "#24432c";
        ctx.lineWidth = 4;
        ctx.stroke();
        ctx.strokeStyle = "#90a568";
        ctx.lineWidth = 1.2;
        ctx.stroke();
        for (let step = 2; step <= last; step += 3) {
          const point = vine.points[step], previous = vine.points[step - 1];
          const heading = Math.atan2(point.y - previous.y, point.x - previous.x);
          const unfurl = smooth((reached - step) / 4);
          for (const side of [-1, 1]) {
            const size = leafSize * (1 + .45 * Math.abs(variation(step + vine.index * 7))) * unfurl;
            const angle = heading + side * (1.05 + .35 * unfurl);
            // A short shoot grows first, then its leaf opens at the tip.
            const shoot = size * .24;
            const x = point.x + Math.cos(angle) * shoot;
            const y = point.y + Math.sin(angle) * shoot;
            ctx.beginPath(); ctx.moveTo(point.x, point.y); ctx.lineTo(x, y);
            ctx.strokeStyle = "#5b7945"; ctx.lineWidth = 1.5; ctx.stroke();
            leaf(x, y, angle, size, step + vine.index, mirror && (step + vine.index) % 23 === 0);
          }
        }
      }
      frame = requestAnimationFrame(draw);
    }
    frame = requestAnimationFrame(draw);
    window.addEventListener("resize", onComplete);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", onComplete); };
  }, [growth, onComplete]);

  return <canvas ref={canvasRef} className={styles.stage} aria-hidden="true" />;
}

export function GrowingPlants() {
  const [growth, setGrowth] = useState<Growth | null>(null);
  const finish = useCallback(() => setGrowth(null), []);
  useEffect(() => {
    if (!growth) return;
    const dismiss = (event: KeyboardEvent) => { if (event.key === "Escape") finish(); };
    window.addEventListener("keydown", dismiss);
    return () => window.removeEventListener("keydown", dismiss);
  }, [growth, finish]);

  function grow(event: MouseEvent<HTMLButtonElement>, side: Growth["side"]) {
    if (growth) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setGrowth({ side, x: side === "left" ? rect.left + 20 : rect.right - 20, y: Math.min(window.innerHeight, rect.bottom), reduced: window.matchMedia("(prefers-reduced-motion: reduce)").matches });
  }

  return <>
    <div className={styles.corners}>
      <button className={`${styles.plant} ${styles.left}`} type="button" onClick={event => grow(event, "left")} aria-label="Grow the leafy plant across the screen" aria-disabled={Boolean(growth)} title="A little room to grow" />
      <button className={`${styles.plant} ${styles.right}`} type="button" onClick={event => grow(event, "right")} aria-label="Grow the peace lily across the screen" aria-disabled={Boolean(growth)} title="A little room to bloom" />
    </div>
    {growth && createPortal(<VineCanopy growth={growth} onComplete={finish} />, document.body)}
  </>;
}
