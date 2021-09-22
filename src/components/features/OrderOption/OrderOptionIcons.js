import React from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from '../../../utils/formatPrice';
import styles from './OrderOption.module.scss';
import Icon from '../../common/Icon/Icon';

export const OrderOptionIcons = ({
  values,
  required,
  currentValue,
  setOptionValue,
}) => (
  <div className={styles.component}>
    {required ? (
      ''
    ) : (
      <div onClick={() => setOptionValue('times-circle')}>
        <Icon name={''} />
        none
      </div>
    )}

    {values.map((value) => (
      <div
        key={value.id}
        className={`${styles.icon} ${
          value.id === currentValue ? styles.iconActive : ''
        }`}
        onClick={() => setOptionValue(value.id)}
      >
        <Icon name={value.icon} />
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.object,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  required: PropTypes.node,
};
