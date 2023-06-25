import { ChangeEvent, useCallback, useMemo, useState } from "react";
import s from "./RangeInput.module.scss";

interface IRangeInputProps {
  min: number;
  max: number;
  optionsName?: string;
  options?: string[];
  step?: number;
}

// todo: вынести типизацию, добавить стили, убрать "палки" делений

export const RangeInput = ({
  min = 0,
  max = 100,
  step = 1,
  optionsName,
  options,
}: IRangeInputProps) => {
  const [inputValue, setInputValue] = useState(0);
  const onChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setInputValue(Number.parseInt(value));
    },
    []
  );

  const optionsList = useMemo(
    () =>
      options.map((label, index) => (
        <option key={index} value={step * index} label={label}></option>
      )),
    [options, step]
  );

  return (
    <div className={s.input_wrapper}>
      <input
        onChange={onChange}
        value={inputValue}
        type="range"
        max={max}
        min={min}
        step={step}
        className={s.input}
        list={optionsName ?? ""}
      />

      {options && (
        <datalist id={optionsName} className={s.range_list}>
          {optionsList}
        </datalist>
      )}
    </div>
  );
};
