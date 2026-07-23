import CornerFrame from "@/components/CornerFrame";

export default function Process() {
  const steps = [
    {
      n: "۰۱",
      title: "ثبت درخواست",
      text: "نیاز خط تولید، نوع ماده و ابعاد دستگاه را برای ما ارسال کنید.",
    },
    {
      n: "۰۲",
      title: "طراحی و مهندسی",
      text: "تیم فنی ما دستگاه را متناسب با خط تولید شما طراحی می‌کند.",
    },
    {
      n: "۰۳",
      title: "ساخت و تست",
      text: "ساخت داخلی با کنترل کیفیت و تست عملکرد پیش از تحویل.",
    },
    {
      n: "۰۴",
      title: "نصب و راه‌اندازی",
      text: "نصب در محل، آموزش اپراتور و پشتیبانی فنی پس از تحویل.",
    },
  ];

  return (
    <section className="py-32 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-black mb-16">
          از سفارش تا راه‌اندازی
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative border border-white/10 rounded-none p-8 hover:border-lime-400/50 hover:bg-white/5 transition"
            >
              <div className="text-lime-400 font-black text-3xl mb-6">{s.n}</div>
              <CornerFrame color="border-white/20" />
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-4 text-neutral-400 leading-7">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
