"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const stats = [
    { value: "۱۲+", label: "دستگاه نصب‌شده این ماه" },
    { value: "۹۸٪", label: "نرخ تحویل به‌موقع" },
    { value: "۲۴/۷", label: "پشتیبانی فنی" },
  ];

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-black">
      <Image
        src="/images/hero-factory.jpg"
        alt="خط تولید صنعتی"
        fill
        priority
        className="object-cover object-center"
      />

      {/* dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-transparent to-transparent" />

      <div className="relative w-full max-w-7xl mx-auto px-6 pb-24 pt-40 text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="inline-block text-xs tracking-widest text-orange-500 font-bold mb-6">
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
            <button className="bg-orange-500 text-black px-8 py-4 rounded-none font-bold hover:bg-orange-400 transition">
              درخواست مشاوره رایگان
            </button>
            <button className="border border-white/30 px-8 py-4 rounded-none hover:bg-white/10 transition backdrop-blur-sm">
              مشاهده محصولات
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 grid grid-cols-3 gap-6 max-w-lg border-t border-white/15 pt-8"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl sm:text-3xl font-black text-orange-500">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-neutral-300 leading-5">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
