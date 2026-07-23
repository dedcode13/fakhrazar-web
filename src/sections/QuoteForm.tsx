export default function QuoteForm() {
  return (
    <section className="py-32 bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-black text-center">
          درخواست مشاوره رایگان
        </h2>
        <p className="mt-4 text-neutral-400 text-center">
          فرم زیر را پر کنید تا کارشناسان فنی ما در اسرع وقت با شما تماس بگیرند
        </p>

        <form className="mt-14 grid sm:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            className="bg-white/5 border border-white/10 rounded-none px-6 py-4 outline-none focus:border-lime-400 transition"
          />
          <input
            type="tel"
            placeholder="شماره تماس"
            className="bg-white/5 border border-white/10 rounded-none px-6 py-4 outline-none focus:border-lime-400 transition"
          />
          <input
            type="email"
            placeholder="ایمیل"
            className="bg-white/5 border border-white/10 rounded-none px-6 py-4 outline-none focus:border-lime-400 transition sm:col-span-2"
          />
          <textarea
            placeholder="توضیح نیاز شما (نوع خط تولید، ابعاد، ماده مصرفی و ...)"
            rows={5}
            className="bg-white/5 border border-white/10 rounded-none px-6 py-4 outline-none focus:border-lime-400 transition sm:col-span-2"
          />
          <button
            type="submit"
            className="sm:col-span-2 bg-lime-400 text-black font-bold rounded-none py-4 hover:bg-lime-300 transition"
          >
            ارسال درخواست
          </button>
        </form>
      </div>
    </section>
  );
}
