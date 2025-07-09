import { create } from "zustand";

interface PlanState {
  plan: string;
  setPlan: (plan: string) => void;
  clearPlan: () => void;
}

export const usePlanStore = create<PlanState>((set) => ({
  plan: "",
  setPlan: (plan) => set({ plan: plan }),
  clearPlan: () => set({ plan: "" }),
}));
