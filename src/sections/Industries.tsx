export default function Industries() {
  const items = [
    { title: "صنایع چاپ", text: "بهبود چسبندگی جوهر روی سطوح مختلف" },
    { title: "بسته‌بندی", text: "کنترل کیفیت فیلم و ورق تولیدی" },
    { title: "پلاستیک", text: "افزایش انرژی سطح در فرآیندهای اکستروژن" },
    { title: "لمینیشن", text: "چسبندگی پایدار لایه‌های چندگانه" },
  ];

  return (
    <section className="py-32 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-black">صنایع تحت پوشش</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {items.map((item) => (
            <div
              key={item.title}
              className="border border-white/10 rounded-md p-8 hover:bg-white/10 transition"
            >
              <div className="text-xl font-bold">{item.title}</div>
              <p className="mt-3 text-sm text-neutral-400 leading-6">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
