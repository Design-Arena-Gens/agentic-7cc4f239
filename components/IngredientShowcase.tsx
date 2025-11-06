"use client";

import type { Benefit, Ingredient, IngredientTier } from "@/data/ingredients";
import { benefitsCopy } from "@/data/ingredients";

interface IngredientShowcaseProps {
  ingredients: Ingredient[];
  activeBenefits: Benefit[];
}

const tierLabels: Record<IngredientTier, string> = {
  base: "বেস অয়েল",
  infusion: "হার্বাল ইনফিউশন",
  booster: "ফিনিশিং বুস্টার"
};

export default function IngredientShowcase({
  ingredients,
  activeBenefits
}: IngredientShowcaseProps) {
  const grouped = ingredients.reduce<Record<IngredientTier, Ingredient[]>>(
    (acc, ingredient) => {
      acc[ingredient.tier].push(ingredient);
      return acc;
    },
    { base: [], infusion: [], booster: [] }
  );

  return (
    <div className="space-y-8">
      {(Object.entries(grouped) as [IngredientTier, Ingredient[]][])
        .filter(([, items]) => items.length > 0)
        .map(([tier, items]) => (
        <section key={tier} className="space-y-4">
          <header className="flex flex-col gap-1">
            <h3 className="font-display text-xl text-forest-800">{tierLabels[tier]}</h3>
            <div className="h-0.5 w-16 rounded-full bg-forest-400"></div>
          </header>
          <div className="grid gap-4 lg:grid-cols-2">
            {items.map((ingredient) => (
              <article
                key={ingredient.id}
                className="rounded-3xl border border-forest-200/70 bg-white/90 p-4 shadow-sm shadow-forest-900/5 backdrop-blur"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h4 className="text-lg font-semibold text-forest-900">
                      {ingredient.name}
                    </h4>
                    <p className="text-xs uppercase tracking-wide text-forest-500">
                      {ingredient.botanicalName}
                    </p>
                  </div>
                  <span className="rounded-full bg-forest-500/10 px-3 py-1 text-xs font-medium text-forest-700">
                    {ingredient.dosage}
                  </span>
                </div>
                <p className="mt-3 text-sm text-forest-700">{ingredient.description}</p>
                <p className="mt-3 text-xs font-medium text-forest-600">
                  উৎস: {ingredient.origin}
                </p>
                <p className="mt-3 rounded-2xl bg-forest-100/70 p-3 text-sm text-forest-700">
                  ইনফিউশন টেকনিক: {ingredient.infusion}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {ingredient.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className={`rounded-full border px-3 py-1 ${
                        activeBenefits.includes(benefit)
                          ? "border-forest-500 bg-forest-500/15 text-forest-800"
                          : "border-forest-200 text-forest-500"
                      }`}
                    >
                      {benefitsCopy[benefit]}
                    </span>
                  ))}
                </div>
                {ingredient.synergizesWith && ingredient.synergizesWith.length > 0 && (
                  <p className="mt-3 text-xs text-forest-600">
                    সেরা সমন্বয়: {ingredient.synergizesWith.join(", ")}
                  </p>
                )}
                {ingredient.cautions && (
                  <p className="mt-3 rounded-2xl border border-forest-300/70 bg-forest-50/80 p-3 text-xs text-forest-700">
                    সতর্কতা: {ingredient.cautions}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
