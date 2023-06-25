type TLevels = "easy" | "medium" | "hard" | "impossible";
type TTrickTypes = "groove" | "soul";

interface ITricksSettings {
  spins: TLevels;
  soul: boolean;
  topSide: boolean;
  bsGroove: boolean;
  fsGroove: boolean;
  negative: boolean;
  switch: boolean;
}

interface ITrickResult {
  entrance: string;
  trick: string;
  spin: string;
}

type TGetTrick = (config: ITricksSettings) => ITrickResult;

export const getTrick: TGetTrick = (config) => {
  return { entrance: "", trick: "", spin: "" };
};

export const pickRandomElementFromArray = (array: []) =>
  array[getRundomNumber(array.length)];

export const getRundomNumber = (max: number) => Math.floor(Math.random() * max);
