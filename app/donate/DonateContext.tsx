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
  /** null together with blankCheque = the Open Field blank cheque. */
  amount: number | null;
  blankCheque: boolean;
  frequency: Frequency;
  name: string;
  email: string;
  /** The dedication the donor writes before starting the payment. */
  message: string;
};

type DonateCtx = DonateState & {
  /** False until sessionStorage has been read; guards redirects on reload. */
  hydrated: boolean;
  set: (patch: Partial<DonateState>) => void;
  reset: () => void;
};

const DEFAULT: DonateState = {
  tierId: null,
  amount: null,
  blankCheque: false,
  frequency: "once",
  name: "",
  email: "",
  message: "",
};

const Ctx = createContext<DonateCtx | null>(null);
const KEY = "knight-donate";

export function DonateProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<DonateState>(DEFAULT);
  const [hydrated, setHydrated] = useState(false);

  // Rehydrate from sessionStorage so a refresh mid-flow keeps the choice.
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(KEY);
      if (raw) setState({ ...DEFAULT, ...JSON.parse(raw) });
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      sessionStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state, hydrated]);

  const value = useMemo<DonateCtx>(
    () => ({
      ...state,
      hydrated,
      set: (patch) => setState((s) => ({ ...s, ...patch })),
      reset: () => setState(DEFAULT),
    }),
    [state, hydrated]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useDonate() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useDonate must be used inside <DonateProvider>");
  return ctx;
}
