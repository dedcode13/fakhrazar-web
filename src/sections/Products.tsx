function IconCorona() {
  return (
    <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="32" cy="32" r="10" />
      <path
        strokeLinecap="round"
        d="M32 4v8M32 52v8M4 32h8M52 32h8M12 12l6 6M46 46l6 6M52 12l-6 6M18 46l-6 6"
      />
    </svg>
  );
}
function IconAntiStatic() {
  return (
    <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M34 4 12 36h16l-4 24 26-34H34l4-22z" />
    </svg>
  );
}
function IconCharger() {
  return (
    <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="14" y="10" width="36" height="44" rx="6" />
      <path strokeLinecap="round" d="M24 24h16M24 32h16M24 40h10" />
    </svg>
  );
}

export default function Products() {
  const products = [
    {
      title: "Corona Treatment",
      text: "افزایش انرژی سطح فیلم و ورق برای چسبندگی بهتر چاپ، لمینیشن و پوشش‌دهی.",
      Icon: IconCorona,
    },
    {
      title: "Anti Static",
      text: "حذف بارهای الکترواستاتیک ناخواسته از خطوط تولید برای ایمنی و کیفیت بالاتر.",
      Icon: IconAntiStatic,
    },
    {
      title: "Static Charger",
      text: "کنترل دقیق و قابل‌تنظیم شارژ الکتریکی در فرآیندهای صنعتی حساس.",
      Icon: IconCharger,
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16">
          <h2 className="text-4xl sm:text-5xl font-black">محصولات ما</h2>
          <p className="text-neutral-500 max-w-md leading-7">
            راهکارهای مهندسی‌شده برای افزایش کیفیت و راندمان خطوط تولید صنعتی
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map(({ title, text, Icon }) => (
            <div
              key={title}
              className="group rounded-md bg-neutral-100 p-10 hover:-translate-y-3 hover:bg-neutral-900 hover:text-white transition-all duration-500"
            >
              <div className="h-20 w-20 rounded-md bg-neutral-900 group-hover:bg-lime-400 group-hover:text-black text-lime-400 flex items-center justify-center mb-8 transition-colors duration-500">
                <Icon />
              </div>
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="mt-5 text-neutral-600 group-hover:text-neutral-300 leading-8 transition-colors duration-500">
                {text}
              </p>
              <button className="mt-8 font-bold inline-flex items-center gap-2">
                مشاهده جزئیات
                <span aria-hidden>←</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
