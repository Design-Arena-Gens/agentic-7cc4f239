import { ritualSteps } from "@/data/ingredients";

export default function RitualTimeline() {
  return (
    <div className="rounded-3xl border border-forest-200/70 bg-white/90 p-6 shadow-lg shadow-forest-900/5">
      <h3 className="font-display text-xl text-forest-800">৭ ধাপের তেল তৈরির রিচুয়াল</h3>
      <p className="mt-1 text-sm text-forest-700">
        প্রতিটি ধাপ অনুসরণ করলে ব্লেন্ডের পুষ্টি এবং কার্যকারিতা সর্বোচ্চ থাকে।
      </p>
      <ol className="mt-5 space-y-4">
        {ritualSteps.map((step, index) => (
          <li key={step.id} className="flex gap-4">
            <div className="flex flex-none items-center justify-center rounded-full bg-forest-500/15 px-3 py-1 text-sm font-semibold text-forest-700">
              #{index + 1}
            </div>
            <div className="flex-1 rounded-2xl border border-forest-200 bg-white/70 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-lg font-semibold text-forest-900">{step.title}</h4>
                <span className="rounded-full bg-forest-500/10 px-3 py-1 text-xs font-medium text-forest-600">
                  {step.timing}
                </span>
              </div>
              <p className="mt-2 text-sm text-forest-700">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
