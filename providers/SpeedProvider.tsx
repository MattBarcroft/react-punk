import { createContext } from "react";

export type TSpeedContext = {
  speed: number;
  setSpeed: (speed: number) => void;
};

export const SpeedContext = createContext<TSpeedContext>(null as any);
