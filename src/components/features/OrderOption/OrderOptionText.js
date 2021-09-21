import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.module.scss';

export const OrderOptionText = ({ id, type, setOptionValue }) => (
  <input
    type={type}
    id={id}
    className={styles.input}
    onChange={(event) => setOptionValue(event.currentTarget.value)}
  ></input>
);

OrderOptionText.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  setOptionValue: PropTypes.func,
};
