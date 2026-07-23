export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-neutral-950/70 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between text-white">
        <div className="font-black text-lg">فناوران جرقه فخرآذر</div>

        <nav className="hidden md:flex gap-10 text-sm text-neutral-300">
          <span className="hover:text-white transition cursor-pointer">محصولات</span>
          <span className="hover:text-white transition cursor-pointer">صنایع</span>
          <span className="hover:text-white transition cursor-pointer">درباره ما</span>
          <span className="hover:text-white transition cursor-pointer">تماس</span>
        </nav>

        <button className="bg-lime-400 text-black rounded-none px-6 py-3 text-sm font-bold hover:bg-lime-300 transition">
          مشاوره رایگان
        </button>
      </div>
    </header>
  );
}
