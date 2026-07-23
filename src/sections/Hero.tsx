"use client";

import { motion } from "framer-motion";
import GridPattern from "@/components/GridPattern";

export default function Hero() {
  const stats = [
    { value: "۱۲+", label: "دستگاه نصب‌شده این ماه" },
    { value: "۹۸٪", label: "نرخ تحویل به‌موقع" },
    { value: "۲۴/۷", label: "پشتیبانی فنی" },
  ];

  return (
    <section className="relative min-h-screen bg-neutral-950 text-white flex items-center overflow-hidden">
      <GridPattern className="absolute inset-0 w-full h-full text-lime-400" />

      <div className="relative max-w-7xl mx-auto px-6 py-40 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs tracking-widest text-lime-400 font-bold mb-6">
            فناوران جرقه فخرآذر
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.15]">
            فناوری کنترل سطح برای خطوط تولید صنعتی
          </h1>

          <p className="mt-8 text-lg text-neutral-300 leading-8 max-w-xl">
            طراحی، ساخت و راه‌اندازی تجهیزات Corona Treatment، Anti Static و
            Static Charger برای صنایع چاپ، بسته‌بندی، پلاستیک و لمینیشن.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-lime-400 text-black px-8 py-4 rounded-full font-bold hover:bg-lime-300 transition">
              درخواست مشاوره رایگان
            </button>
            <button className="border border-white/20 px-8 py-4 rounded-full hover:bg-white/5 transition">
              مشاهده محصولات
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl sm:text-3xl font-black text-lime-400">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-neutral-400 leading-5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-square rounded-[50px] bg-gradient-to-br from-lime-400/20 via-neutral-900 to-transparent border border-white/10 overflow-hidden"
        >
          <GridPattern className="absolute inset-0 w-full h-full text-white/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-2/3 h-2/3 text-lime-400/80">
              <g fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="100" cy="100" r="70" opacity="0.4" />
                <circle cx="100" cy="100" r="45" opacity="0.7" />
                <path d="M100 30 L100 5 M100 195 L100 170 M30 100 L5 100 M195 100 L170 100" strokeLinecap="round" />
                <path d="M55 55 L38 38 M145 55 L162 38 M55 145 L38 162 M145 145 L162 162" strokeLinecap="round" opacity="0.6" />
              </g>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
