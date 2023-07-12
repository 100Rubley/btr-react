import { ChangeEvent, useCallback, useState } from "react";
import s from "./Checkbox.module.scss";

type TCheckboxState = "on" | "off";

interface CheckboxProps {
  text: string;
  isChecked: TCheckboxState;
}

export const Checkbox = ({ text, isChecked }: CheckboxProps) => {
  const [checked, setChecked] = useState<TCheckboxState>(isChecked);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const current = e.target.value;
      setChecked(current === "off" ? "on" : "off");
    },
    [checked]
  );

  return (
    <div className={s.container}>
      <input
        type="checkbox"
        id="checkbox"
        onChange={onChange}
        value={checked}
        className={s.input}
      />
      <label htmlFor="checkbox" className={s.label}>
        {text}
      </label>
    </div>
  );
};
