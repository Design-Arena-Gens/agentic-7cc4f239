"use client";

import { useMemo, useState } from "react";
import GoalSelector from "@/components/GoalSelector";
import IngredientShowcase from "@/components/IngredientShowcase";
import DiagnosticsPanel from "@/components/DiagnosticsPanel";
import { buildFormula } from "@/lib/recommendation";
import type { Benefit } from "@/data/ingredients";
import InfusionProtocol from "@/components/InfusionProtocol";

const defaultBenefits: Benefit[] = [
  "reduceHairFall",
  "boostGrowth",
  "thickenHair",
  "removeDandruff"
];

export default function FormulaWorkbench() {
  const [activeBenefits, setActiveBenefits] = useState<Benefit[]>(defaultBenefits);

  const { ingredients, diagnostics } = useMemo(() => buildFormula(activeBenefits), [activeBenefits]);

  return (
    <section className="grid gap-8 lg:grid-cols-[1.25fr,1fr]">
      <div className="space-y-6">
        <GoalSelector onSelect={setActiveBenefits} />
        <IngredientShowcase ingredients={ingredients} activeBenefits={activeBenefits} />
      </div>
      <div className="space-y-6">
        <DiagnosticsPanel coverage={diagnostics.coverage} missing={diagnostics.missing} />
        <InfusionProtocol ingredientCount={ingredients.length} />
      </div>
    </section>
  );
}
