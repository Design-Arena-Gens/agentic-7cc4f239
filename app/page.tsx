import FormulaWorkbench from "@/components/FormulaWorkbench";
import RitualTimeline from "@/components/RitualTimeline";
import { benefitsCopy, ingredientLibrary } from "@/data/ingredients";
import type { Benefit } from "@/data/ingredients";

export default function Page() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-10 lg:px-12">
      <header className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-forest-500">
          সমন্বিত হারবাল হেয়ার ল্যাব
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-forest-900 sm:text-5xl">
          পাতলা চুলের জন্য আলটিমেট গ্রোথ-অ্যাক্টিভেটিং হারবাল অয়েল
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-forest-700">
          স্ক্যাল্পের মাইক্রোসার্কুলেশন, ফলিকুলার পুষ্টি ও অ্যান্টিমাইক্রোবিয়াল সুরক্ষা নিশ্চিত করতে প্রাচ্যের পরীক্ষিত হার্ব এবং আধুনিক ফাইটোকেমিক্যাল বিশ্লেষণের ফল।
        </p>
      </header>
      <FormulaWorkbench />
      <section className="grid gap-8 lg:grid-cols-[2fr,1fr]">
        <div>
          <h2 className="font-display text-2xl text-forest-800">কোন উপাদান কোন সমস্যায় কাজ করে?</h2>
          <p className="mt-3 text-sm text-forest-700">
            প্রতিটি হার্ব নির্দিষ্ট সমস্যাকে টার্গেট করে। এই ম্যাট্রিক্স থেকে বুঝে নিন কোন উপাদান কোন ফেজে কাজ করছে।
          </p>
          <div className="mt-6 grid gap-3 text-sm text-forest-700 sm:grid-cols-2">
            {(Object.keys(benefitsCopy) as Benefit[]).map((benefit) => (
              <div key={benefit} className="rounded-2xl border border-forest-200/70 bg-white/85 p-4">
                <h3 className="font-semibold text-forest-800">{benefitsCopy[benefit]}</h3>
                <p className="mt-2 text-xs leading-relaxed">
                  {
                    ingredientLibrary
                      .filter((ingredient) => ingredient.benefits.includes(benefit))
                      .map((ingredient) => ingredient.name)
                      .join(" • ")
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
        <RitualTimeline />
      </section>
      <section className="rounded-3xl border border-forest-200 bg-white/92 p-6 shadow-forest-900/5">
        <h2 className="font-display text-2xl text-forest-800">স্টোরেজ ও নিরাপত্তা নির্দেশিকা</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-forest-100/80 p-4 text-sm text-forest-700">
            <h3 className="text-lg font-semibold text-forest-900">শেল্ফ লাইফ</h3>
            <p className="mt-2">
              ভিটামিন ই ও মরিঙ্গার প্রাকৃতিক অ্যান্টিঅক্সিডেন্ট ব্লেন্ডকে রক্ষা করে ৯ মাস পর্যন্ত কার্যকর রাখে। ইউভি-প্রতিরোধী গাঢ় কাচের বোতলে সংরক্ষণ করুন।
            </p>
          </div>
          <div className="rounded-2xl bg-forest-100/80 p-4 text-sm text-forest-700">
            <h3 className="text-lg font-semibold text-forest-900">প্যাচ টেস্ট</h3>
            <p className="mt-2">
              প্রথম ব্যবহার করার আগে কানের পেছনে ২৪ ঘন্টার প্যাচ টেস্ট করুন। স্ক্যাল্পে ক্ষত বা সংক্রমণ থাকলে চিকিৎসকের পরামর্শ নিন।
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
