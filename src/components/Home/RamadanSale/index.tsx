"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "@/models/product";
import { getRandomProducts } from "@/lib/api";
import SingleItem from "../BestSeller/SingleItem";

const SALE_END = new Date("2026-03-20T23:59:59+03:00");

function useCountdown(end: Date) {
  const calc = () => {
    const diff = Math.max(0, end.getTime() - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const RamadanSale = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const countdown = useCountdown(SALE_END);

  useEffect(() => {
    getRandomProducts()
      .then((data) => setProducts(data.slice(0, 8)))
      .catch(() => {});
  }, []);

  if (products.length === 0) return null;

  return (
    <section className="relative overflow-hidden py-16 bg-[#120826]">
      {/* ── Decorative background ─────────────────────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft glow blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-purple-700/20 blur-3xl" />
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl" />

        {/* Stars */}
        {[
          { top: "8%", left: "5%", size: 3 },
          { top: "15%", left: "18%", size: 2 },
          { top: "5%", left: "40%", size: 2.5 },
          { top: "12%", left: "62%", size: 2 },
          { top: "7%", left: "80%", size: 3 },
          { top: "22%", left: "90%", size: 2 },
          { top: "40%", left: "3%", size: 2 },
          { top: "55%", left: "95%", size: 2.5 },
          { top: "75%", left: "8%", size: 2 },
          { top: "85%", left: "50%", size: 2 },
          { top: "90%", left: "75%", size: 2.5 },
          { top: "70%", left: "88%", size: 2 },
        ].map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/70 animate-pulse"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${2 + (i % 3)}s`,
            }}
          />
        ))}

        {/* Crescent moon SVG — top right */}
        <svg
          className="absolute top-6 right-10 opacity-20"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M55 10C38.43 10 25 23.43 25 40C25 56.57 38.43 70 55 70C47.76 70 41.01 67.11 36 62.33C27.41 54.09 24.12 41.41 28.5 29.83C32.88 18.25 44.02 10 55 10Z"
            fill="#F59E0B"
          />
        </svg>

        {/* Small crescent — bottom left */}
        <svg
          className="absolute bottom-8 left-8 opacity-10 rotate-[200deg]"
          width="48"
          height="48"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M55 10C38.43 10 25 23.43 25 40C25 56.57 38.43 70 55 70C47.76 70 41.01 67.11 36 62.33C27.41 54.09 24.12 41.41 28.5 29.83C32.88 18.25 44.02 10 55 10Z"
            fill="#F59E0B"
          />
        </svg>
      </div>

      <div className="relative max-w-[1280px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* ── Section header ────────────────────────────── */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3 bg-amber-400/10 border border-amber-400/20 px-4 py-1.5 rounded-full">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0L9.8 5.5H16L11.1 8.9L12.9 14.4L8 11L3.1 14.4L4.9 8.9L0 5.5H6.2L8 0Z" />
            </svg>
            Limited Time Offer
            <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0L9.8 5.5H16L11.1 8.9L12.9 14.4L8 11L3.1 14.4L4.9 8.9L0 5.5H6.2L8 0Z" />
            </svg>
          </span>

          <div className="flex items-center justify-center gap-4 mb-3">
            {/* Crescent inline */}
            <svg width="32" height="32" viewBox="0 0 80 80" fill="none">
              <path
                d="M55 10C38.43 10 25 23.43 25 40C25 56.57 38.43 70 55 70C47.76 70 41.01 67.11 36 62.33C27.41 54.09 24.12 41.41 28.5 29.83C32.88 18.25 44.02 10 55 10Z"
                fill="#F59E0B"
              />
            </svg>
            <h2 className="font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Ramadan Sale
            </h2>
            <svg width="32" height="32" viewBox="0 0 80 80" fill="none" className="scale-x-[-1]">
              <path
                d="M55 10C38.43 10 25 23.43 25 40C25 56.57 38.43 70 55 70C47.76 70 41.01 67.11 36 62.33C27.41 54.09 24.12 41.41 28.5 29.83C32.88 18.25 44.02 10 55 10Z"
                fill="#F59E0B"
              />
            </svg>
          </div>

          <p className="text-purple-200/70 text-sm max-w-md mx-auto">
            Celebrate the holy month with exclusive deals on top products. Prices slashed — don&apos;t miss out.
          </p>

          {/* Countdown */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {[
              { label: "Days", value: countdown.days },
              { label: "Hours", value: countdown.hours },
              { label: "Mins", value: countdown.minutes },
              { label: "Secs", value: countdown.seconds },
            ].map(({ label, value }, i) => (
              <React.Fragment key={label}>
                {i > 0 && <span className="text-amber-400/60 font-bold text-xl mb-4">:</span>}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 border border-amber-400/20 backdrop-blur-sm">
                    <span className="text-white font-bold text-xl tabular-nums">
                      {String(value).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-amber-400/70 text-[10px] uppercase tracking-widest mt-1.5 font-medium">
                    {label}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
          <p className="text-purple-300/50 text-xs mt-3">Sale ends March 20, 2026</p>

          {/* Gold divider */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400/60" />
          </div>
        </div>

        {/* ── Product grid ──────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((item, key) => (
            <SingleItem item={item} key={key} />
          ))}
        </div>

        {/* ── CTA ───────────────────────────────────────── */}
        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 font-semibold text-sm py-3 px-8 rounded-full bg-amber-400 text-[#120826] hover:bg-amber-300 transition-colors duration-200"
          >
            Shop All Deals
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RamadanSale;
