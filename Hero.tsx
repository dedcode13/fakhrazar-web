
'use client';
import {motion} from 'framer-motion';

export default function Hero(){
return <section className="min-h-screen pt-40 bg-neutral-950 text-white">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}}>
<h1 className="text-5xl lg:text-7xl font-black">
راهکارهای پیشرفته کنترل سطح صنعتی
</h1>
<p className="mt-8 text-xl text-neutral-300">
تولید تجهیزات کرونا تریتمنت، آنتی استاتیک و استاتیک شارژر
</p>
</motion.div>
<div className="aspect-square rounded-[50px] bg-gradient-to-br from-lime-400/30 to-transparent">
</div>
</div>
</section>
}
