import { formatPrice } from '../../../utils/formatPrice';
import styles from './OrderOption.module.scss';

const newValueSet = (currentValue, id, checked) => {
  if (checked) {
    return [...currentValue, id];
  } else {
    return currentValue.filter((value) => value !== id);
  }
};

export const OrderOptionCheckboxes = ({
  values,
  currentValue,
  setOptionValue,
}) => (
  <div className={styles.checkboxes}>
    {values.map((value) => (
      <label key={value.id}>
        <input
          type="checkbox"
          value={value.id}
          checked={currentValue.includes(value.id)}
          onChange={(event) =>
            setOptionValue(
              newValueSet(currentValue, value.id, event.currentTarget.checked)
            )
          }
        ></input>
        {value.name}({formatPrice(value.price)})
      </label>
    ))}
  </div>
);
