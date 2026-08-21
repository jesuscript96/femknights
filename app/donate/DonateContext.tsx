"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Frequency = "once" | "monthly";

export type DonateState = {
  tierId: string | null;
  amount: number | null;
  frequency: Frequency;
  name: string;
  email: string;
};

type DonateCtx = DonateState & {
  set: (patch: Partial<DonateState>) => void;
  reset: () => void;
};

const DEFAULT: DonateState = {
  tierId: null,
  amount: null,
  frequency: "once",
  name: "",
  email: "",
};

const Ctx = createContext<DonateCtx | null>(null);
const KEY = "knight-donate";

export function DonateProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<DonateState>(DEFAULT);

  // Rehydrate from sessionStorage so a refresh mid-flow keeps the choice.
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(KEY);
      if (raw) setState({ ...DEFAULT, ...JSON.parse(raw) });
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state]);

  const value = useMemo<DonateCtx>(
    () => ({
      ...state,
      set: (patch) => setState((s) => ({ ...s, ...patch })),
      reset: () => setState(DEFAULT),
    }),
    [state]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useDonate() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useDonate must be used inside <DonateProvider>");
  return ctx;
}
