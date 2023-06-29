export const DIFFICULTY_LEVELS = ["Easy", "Medium", "Hard", "Impossible"];
export const LOCAL_STORAGE_THEME_KEY = "theme";

export interface ISpinsObject {
  EASY: string[];
  MEDIUM: string[];
  HARD: string[];
  IMPOSSIBLE: string[];
}

export interface ITricksObject {
  SOUL: string[];
  GROOVE: string[];
}

// negative top side switch - будут в коде выглядеть как флаг true/false, там названия не нужны

export const entrances: ISpinsObject = {
  EASY: ["No spin", "Inspin", "Outspin"],
  MEDIUM: ["Zerospin", "Alleyoop"],
  HARD: ["Truespin", "Full Cab", "Full Cab true", "270", "Hurricane"],
  IMPOSSIBLE: ["450", "540", "720", "Misty to", "Back flip to"],
};

export const tricks: ITricksObject = {
  SOUL: [
    "Soul",
    "Mizou",
    "Acid",
    "PStar",
    "Makio",
    "X-Grind",
    "Mistrial",
    "Torque soul",
  ],
  GROOVE: [
    "UFO",
    "Royale",
    "Full Torque",
    "Unity",
    "Backslide",
    "Torque",
    "Cab driver",
    "Fastslide",
    "Pudslide",
  ],
};

export const spins: ISpinsObject = {
  EASY: ["No spin", "180 Easy way"],
  MEDIUM: ["180 Hard way", "270", "360"],
  HARD: ["540", "720"],
  IMPOSSIBLE: ["Misty out", "Back flip out"],
};
