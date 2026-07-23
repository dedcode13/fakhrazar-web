function CheckIcon({ good }: { good: boolean }) {
  return (
    <svg viewBox="0 0 20 20" className={`w-5 h-5 shrink-0 ${good ? "text-lime-400" : "text-neutral-600"}`} fill="currentColor">
      {good ? (
        <path d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" />
      ) : (
        <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      )}
    </svg>
  );
}

export default function Comparison() {
  const oldWay = [
    "زمان تحویل نامشخص",
    "عدم ارائه مستندات فنی",
    "هزینه‌های پنهان بعد از سفارش",
    "پاسخ‌گویی کند به استعلام‌ها",
  ];

  const newWay = [
    "زمان تحویل تضمین‌شده و مکتوب",
    "ارائه کامل مستندات فنی و تست",
    "قیمت شفاف و بدون هزینه پنهان",
    "پاسخ‌گویی حداکثر ظرف ۴۸ ساعت",
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-black mb-16 max-w-2xl">
          خیلی‌ها قول می‌دهند، ما تحویل می‌دهیم
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-none border border-neutral-200 p-10">
            <h3 className="text-sm font-bold text-neutral-400 mb-8 tracking-widest">
              روش مرسوم بازار
            </h3>
            <ul className="space-y-5">
              {oldWay.map((item) => (
                <li key={item} className="flex items-center gap-3 text-neutral-500">
                  <CheckIcon good={false} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-none bg-neutral-950 text-white p-10">
            <h3 className="text-sm font-bold text-lime-400 mb-8 tracking-widest">
              روش فناوران جرقه فخرآذر
            </h3>
            <ul className="space-y-5">
              {newWay.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckIcon good={true} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
