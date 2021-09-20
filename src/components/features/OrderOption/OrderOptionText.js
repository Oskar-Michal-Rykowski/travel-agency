import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.module.scss';

export const OrderOptionText = ({ id, type }) => (
  <input type={type} id={id} className={styles.input}></input>
);

OrderOptionText.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
};
