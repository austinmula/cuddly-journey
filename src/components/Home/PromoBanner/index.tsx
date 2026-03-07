import React from "react";
import Image from "next/image";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-10 sm:py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative z-1 overflow-hidden rounded-2xl bg-[#F7F4EF] py-12 sm:py-16 xl:py-22.5 px-6 sm:px-10 lg:px-14 xl:px-19 mb-7.5">

          {/* ── Gradient overlay ──────────────────────── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                linear-gradient(135deg,
                  rgba(247, 244, 239, 0) 0%,
                  rgba(226, 217, 193, 0.08) 40%,
                  rgba(247, 221, 176, 0.18) 70%,
                  rgba(230, 204, 175, 0.22) 100%
                )
              `,
            }}
          />

          {/* ── Amber glow blob — right side behind image ── */}
          <div className="absolute top-0 right-0 bottom-0 w-[55%] pointer-events-none overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-amber-400/30 blur-[80px]" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-orange-300/20 blur-[60px]" />
          </div>

          {/* Small filled square accent — top right area */}
          <div
            className="absolute top-8 right-[45%] w-3 h-3 bg-amber-400/60 rotate-45 pointer-events-none"
          />
          <div
            className="absolute top-14 right-[42%] w-1.5 h-1.5 bg-amber-500/40 rotate-45 pointer-events-none"
          />

          {/* Corner accent — top left */}
          <div className="absolute top-0 left-0 w-24 h-24 pointer-events-none">
            <div className="absolute top-6 left-6 w-10 h-px bg-amber-500/40" />
            <div className="absolute top-6 left-6 w-px h-10 bg-amber-500/40" />
          </div>

          {/* ── Content ─────────────────────────────────── */}
          <div className="relative z-10 max-w-[500px] w-full">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-100 border border-amber-200 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
              SharpSpace LTD
            </span>

            <h2 className="font-extrabold text-3xl sm:text-4xl xl:text-5xl text-[#1C1A17] leading-tight mb-5">
              Power Up<br />
              <span className="text-amber-600">Your Tech.</span>
            </h2>

            <p className="text-[#1C1A17]/55 text-sm sm:text-base leading-relaxed max-w-[380px]">
              Top-quality computers, accessories &amp; expert laptop repairs — all in one place.
            </p>

            {/* Stats row */}
            <div className="flex items-center gap-6 mt-7 mb-8">
              <div>
                <p className="text-[#1C1A17] font-bold text-lg leading-none">500+</p>
                <p className="text-[#1C1A17]/40 text-xs mt-1">Products</p>
              </div>
              <div className="w-px h-8 bg-[#1C1A17]/10" />
              <div>
                <p className="text-[#1C1A17] font-bold text-lg leading-none">24/7</p>
                <p className="text-[#1C1A17]/40 text-xs mt-1">Support</p>
              </div>
              <div className="w-px h-8 bg-[#1C1A17]/10" />
              <div>
                <p className="text-[#1C1A17] font-bold text-lg leading-none">Kenya</p>
                <p className="text-[#1C1A17]/40 text-xs mt-1">Wide Delivery</p>
              </div>
            </div>

            <a
              href="/shop"
              className="inline-flex items-center gap-2.5 font-semibold text-sm text-white bg-[#1C1A17] py-3 px-8 rounded-full ease-out duration-200 hover:bg-amber-600 shadow-md"
            >
              Shop Now
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* ── Product image ────────────────────────────── */}
          <Image
            src="/images/promo/promo-01.png"
            alt="promo img"
            className="hidden sm:block absolute bottom-0 right-6 lg:right-24"
            style={{ mixBlendMode: "darken" }}
            width={300}
            height={380}
          />
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
