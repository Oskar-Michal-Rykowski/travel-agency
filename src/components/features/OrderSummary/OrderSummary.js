import PropTypes from 'prop-types';

import styles from './OrderSummary.module.scss';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';

export const OrderSummary = (props) => {
  return (
    <h2 className={styles.component}>
      Total:{' '}
      <strong>
        {formatPrice(calculateTotal(props.tripCost, props.options))}
      </strong>
    </h2>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.node,
};
