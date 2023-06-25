import { DIFFICULTY_LEVELS } from "../../store/constants";
import { RangeInput } from "../Input/RangeInput";
import s from "./LevelSelector.module.scss";

// вынсти контейнер
// отрисовка в зависимости от пропсов

export const LevelSelector = () => {
  return (
    <div className={s.container}>
      <RangeInput max={75} min={0} step={25} optionsName="difficulty" options={DIFFICULTY_LEVELS}/>
    </div>
  );
};
