export default function Products() {
  const products = [
    {
      title: "Corona Treatment",
      text: "افزایش انرژی سطح برای بهبود چاپ، لمینیشن و اتصال مواد",
    },
    {
      title: "Anti Static",
      text: "حذف بارهای الکتریکی ناخواسته از خطوط تولید",
    },
    {
      title: "Static Charger",
      text: "کنترل دقیق شارژ الکتریکی در فرآیندهای صنعتی",
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl font-black">محصولات ما</h2>
          <p className="text-neutral-500 max-w-md">
            راهکارهای مهندسی شده برای افزایش کیفیت تولید
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.title}
              className="group rounded-[40px] bg-neutral-100 p-10 hover:-translate-y-3 transition-all duration-500"
            >
              <div className="h-48 rounded-3xl bg-neutral-900 mb-8" />
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="mt-5 text-neutral-600 leading-8">{item.text}</p>
              <button className="mt-8 font-bold">مشاهده جزئیات →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
