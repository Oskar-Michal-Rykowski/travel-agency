import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';

export const OrderOptionNumber = ({ currentValue, limits, setOptionValue }) => (
  <div className={styles.number}>
    <input
      type="number"
      className={styles.inputSmall}
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={(event) => setOptionValue(event.currentTarget.value)}
      readOnly
    ></input>
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.node,
  limits: PropTypes.object,
  setOptionValue: PropTypes.func,
  price: PropTypes.string,
};
