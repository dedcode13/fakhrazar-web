export default function Industries() {
  const items = ["صنایع چاپ", "بسته‌بندی", "پلاستیک", "لمینیشن"];

  return (
    <section className="py-32 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-black">صنایع تحت پوشش</h2>

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {items.map((item) => (
            <div
              key={item}
              className="border border-white/10 rounded-[35px] p-10 text-xl hover:bg-white/10 transition"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
