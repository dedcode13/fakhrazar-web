"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-neutral-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-7xl font-black leading-tight">
            فناوری کنترل سطح برای تولید صنعتی نسل جدید
          </h1>

          <p className="mt-8 text-xl text-neutral-300">
            طراحی و تولید تجهیزات Corona Treatment، Anti Static و Static Charger
          </p>

          <div className="mt-10 flex gap-4">
            <button className="bg-lime-400 text-black px-8 py-4 rounded-full font-bold">
              درخواست مشاوره
            </button>
            <button className="border border-white/30 px-8 py-4 rounded-full">
              محصولات
            </button>
          </div>
        </motion.div>

        <div className="aspect-square rounded-[50px] bg-gradient-to-br from-lime-400/30 to-transparent border border-white/10 flex items-center justify-center text-neutral-400">
          Industrial Image
        </div>
      </div>
    </section>
  );
}
