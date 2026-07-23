export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-black text-xl">فناوران جرقه</div>

        <nav className="hidden md:flex gap-10">
          <span>محصولات</span>
          <span>فناوری</span>
          <span>درباره ما</span>
          <span>تماس</span>
        </nav>

        <button className="bg-black text-white rounded-full px-7 py-3">
          مشاوره
        </button>
      </div>
    </header>
  );
}
