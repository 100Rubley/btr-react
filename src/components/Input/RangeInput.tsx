import { useMemo } from "react";
import s from "./RangeInput.module.css";

interface IRangeInputProps {
  min: number;
  max: number;
  optionsName?: string;
  options?: string[];
  step?: number;
}

export const RangeInput = ({
  min = 0,
  max = 100,
  step = 1,
  optionsName,
  options,
}: IRangeInputProps) => {
  const optionsList = useMemo(
    () =>
      options.map((label, index) => (
        <option key={index} value={step * index} label={label}></option>
      )),
    [options, step]
  );

  return (
    <>
      <input
        type="range"
        max={max}
        min={min}
        step={step}
        className={s.input}
        list={optionsName ?? ""}
      />

      {options && <datalist id={optionsName}>{optionsList}</datalist>}
    </>
  );
};
