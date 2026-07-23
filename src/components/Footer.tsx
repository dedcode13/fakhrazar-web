export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold">فناوران جرقه فخرآذر</h3>
          <p className="mt-4 text-neutral-400 leading-7 max-w-xs">
            تجهیزات کنترل سطح صنعتی — Corona Treatment، Anti Static و Static
            Charger برای خطوط تولید مدرن.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-sm tracking-widest text-neutral-400">
            دسترسی سریع
          </h4>
          <ul className="space-y-3 text-neutral-300">
            <li>محصولات</li>
            <li>صنایع تحت پوشش</li>
            <li>درباره ما</li>
            <li>تماس با ما</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-sm tracking-widest text-neutral-400">
            اطلاعات تماس
          </h4>
          <ul className="space-y-3 text-neutral-300">
            <li dir="ltr" className="text-right">+98 21 ---- ----</li>
            <li>info@fakhrazar.example</li>
            <li>تهران، ایران</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-sm text-neutral-500 flex flex-col sm:flex-row justify-between gap-4">
        <span>© {new Date().getFullYear()} فناوران جرقه فخرآذر. تمامی حقوق محفوظ است.</span>
        <span>ساخته‌شده با Next.js</span>
      </div>
    </footer>
  );
}
