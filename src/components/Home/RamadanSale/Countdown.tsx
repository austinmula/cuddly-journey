"use client";
import React, { useEffect, useState } from "react";

const SALE_END = new Date("2026-03-20T23:59:59+03:00");

function calc() {
  const diff = Math.max(0, SALE_END.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const Countdown = () => {
  const [time, setTime] = useState(calc);

  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6">
      {[
        { label: "Days", value: time.days },
        { label: "Hours", value: time.hours },
        { label: "Mins", value: time.minutes },
        { label: "Secs", value: time.seconds },
      ].map(({ label, value }, i) => (
        <React.Fragment key={label}>
          {i > 0 && (
            <span className="text-amber-400/60 font-bold text-lg sm:text-xl mb-4">:</span>
          )}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-white/5 border border-amber-400/20 backdrop-blur-sm">
              <span className="text-white font-bold text-lg sm:text-xl tabular-nums">
                {String(value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-amber-400/70 text-[9px] sm:text-[10px] uppercase tracking-widest mt-1.5 font-medium">
              {label}
            </span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Countdown;
