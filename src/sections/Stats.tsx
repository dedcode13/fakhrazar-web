export default function Stats() {
  const stats = [
    ["+500", "سیستم نصب شده"],
    ["+15", "سال تجربه"],
    ["+30", "مشتری صنعتی"],
    ["24/7", "پشتیبانی"],
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((item) => (
          <div key={item[0]} className="text-center">
            <div className="text-5xl font-black">{item[0]}</div>
            <p className="mt-4 text-neutral-500">{item[1]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
