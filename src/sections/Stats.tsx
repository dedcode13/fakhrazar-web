export default function Stats() {
  const stats = [
    ["+۵۰۰", "سیستم نصب‌شده"],
    ["+۱۵", "سال تجربه"],
    ["+۳۰", "مشتری صنعتی"],
    ["۲۴/۷", "پشتیبانی فنی"],
  ];

  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((item) => (
          <div key={item[0]} className="text-center">
            <div className="text-4xl sm:text-5xl font-black text-white">{item[0]}</div>
            <p className="mt-4 text-neutral-500">{item[1]}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-neutral-400 mt-10">
        * ارقام نمونه — پس از دریافت آمار واقعی جایگزین می‌شود
      </p>
    </section>
  );
}
