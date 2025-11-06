"use client";

import type { Benefit } from "@/data/ingredients";
import { benefitsCopy } from "@/data/ingredients";

interface DiagnosticsPanelProps {
  coverage: Record<Benefit, number>;
  missing: Benefit[];
}

export default function DiagnosticsPanel({ coverage, missing }: DiagnosticsPanelProps) {
  return (
    <div className="rounded-3xl border border-forest-300/60 bg-white/90 p-6 shadow-lg shadow-forest-900/5">
      <h3 className="font-display text-xl text-forest-800">ফর্মুলা বিশ্লেষণ</h3>
      <p className="mt-2 text-sm text-forest-700">
        প্রতিটি লক্ষ্য পূরণের জন্য কতটি কার্যকর হার্ব যুক্ত হয়েছে তার দ্রুত ঝলক দেখুন। শূন্য কভারেজ মানে ওই সমস্যার জন্য অতিরিক্ত হার্ব যোগ করুন।
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {(Object.keys(coverage) as Benefit[]).map((benefit) => (
          <div
            key={benefit}
            className={`rounded-2xl border px-4 py-3 ${
              coverage[benefit] > 0 ? "border-forest-300 bg-forest-100/70" : "border-red-200 bg-red-50"
            }`}
          >
            <p className="text-sm font-medium text-forest-800">
              {benefitsCopy[benefit]}
            </p>
            <p className="text-xs text-forest-600/80">অ্যাক্টিভ উপাদান: {coverage[benefit]}</p>
          </div>
        ))}
      </div>
      {missing.length > 0 && (
        <div className="mt-5 rounded-2xl border border-red-200 bg-red-50/70 p-4 text-sm text-red-700">
          এই লক্ষ্যগুলো সম্পূর্ণ পূরণ হয়নি: {missing.map((benefit) => benefitsCopy[benefit]).join(" • ")}
        </div>
      )}
      {missing.length === 0 && (
        <div className="mt-5 rounded-2xl border border-forest-400 bg-forest-500/10 p-4 text-sm text-forest-800">
          প্রত্যেক সমস্যার জন্য শক্তিশালী হার্ব যুক্ত হয়েছে। ব্লেন্ডটি সর্বোচ্চ কভারেজ দিচ্ছে।
        </div>
      )}
    </div>
  );
}
