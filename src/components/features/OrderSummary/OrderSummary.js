import PropTypes from 'prop-types';

import styles from './OrderSummary.module.scss';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';

export const OrderSummary = ({ tripCost, options }) => {
  return (
    <h2 className={styles.component}>
      Total: <strong>{formatPrice(calculateTotal(tripCost, options))}</strong>
    </h2>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};
