export default function Testimonials() {
  const items = [
    {
      quote:
        "دستگاه Corona Treatment که نصب کردند کیفیت چاپ روی فیلم‌های ما را به‌طور محسوسی بالا برد و دیگر مشکل پرش رنگ نداریم.",
      name: "مدیر تولید یک واحد بسته‌بندی",
    },
    {
      quote:
        "پشتیبانی فنی سریع و پاسخ‌گو بود؛ در کمتر از یک هفته از سفارش تا نصب طول کشید.",
      name: "مدیر فنی یک کارخانه لمینیشن",
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-black mb-16 max-w-xl">
          اعتماد مشتریان صنعتی
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((t) => (
            <div key={t.name} className="rounded-none bg-neutral-100 p-10">
              <p className="text-lg leading-8 text-neutral-700">“{t.quote}”</p>
              <p className="mt-6 font-bold">{t.name}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-neutral-400 mt-8">
          * نمونه متن — پس از دریافت نظرات واقعی مشتریان جایگزین می‌شود
        </p>
      </div>
    </section>
  );
}
