import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';

export const OrderOptionText = ({ id, type }) => (
  <input type={type} id={id} className={styles.input}></input>
);

OrderOptionText.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
};
