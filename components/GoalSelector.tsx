"use client";

import { useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import type { Benefit } from "@/data/ingredients";
import { benefitsCopy, ingredientLibrary } from "@/data/ingredients";

const defaultSelection: Benefit[] = [
  "reduceHairFall",
  "boostGrowth",
  "thickenHair",
  "removeDandruff"
];

interface GoalSelectorProps {
  onSelect: (benefits: Benefit[]) => void;
}

export default function GoalSelector({ onSelect }: GoalSelectorProps) {
  const [selected, setSelected] = useState<Benefit[]>(defaultSelection);

  useEffect(() => {
    onSelect(defaultSelection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const benefitScores = useMemo(() => {
    return ingredientLibrary.reduce<Record<Benefit, number>>((acc, ingredient) => {
      ingredient.benefits.forEach((benefit) => {
        acc[benefit] = (acc[benefit] ?? 0) + (ingredient.tier === "base" ? 2 : ingredient.tier === "booster" ? 1.5 : 1);
      });
      return acc;
    }, {} as Record<Benefit, number>);
  }, []);

  const toggleSelection = (benefit: Benefit) => {
    setSelected((prev) => {
      const exists = prev.includes(benefit);
      const next = exists ? prev.filter((b) => b !== benefit) : [...prev, benefit];
      onSelect(next);
      return next;
    });
  };

  return (
    <div className="rounded-3xl border border-forest-200 bg-white/90 p-6 shadow-xl shadow-forest-900/5">
      <h2 className="font-display text-2xl font-semibold text-forest-800">
        লক্ষ্য ঠিক করুন
      </h2>
      <p className="mt-2 text-sm text-forest-700">
        নিচের সমস্যাগুলোর উপর ভিত্তি করে সেরা হার্ব ও বেস তেল বেছে নেওয়া হয়েছে। আপনি চাইলে টগল করে কাস্টম ব্লেন্ড তৈরি করতে পারেন।
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {(Object.keys(benefitsCopy) as Benefit[]).map((benefit) => {
          const active = selected.includes(benefit);
          return (
            <button
              key={benefit}
              type="button"
              onClick={() => toggleSelection(benefit)}
              className={classNames(
                "flex items-start gap-3 rounded-2xl border px-4 py-3 text-left transition-all",
                active
                  ? "border-forest-500 bg-forest-500/10 text-forest-900 shadow-sm"
                  : "border-forest-200 bg-white/80 text-forest-600 hover:border-forest-300"
              )}
            >
              <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-forest-500"></span>
              <span>
                <span className="font-medium">{benefitsCopy[benefit]}</span>
                <span className="block text-xs text-forest-600/80">
                  সম্ভাব্য শক্তি: {benefitScores[benefit]?.toFixed(1) ?? "0"}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
