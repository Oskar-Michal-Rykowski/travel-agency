// import styles from './OrderOption.module.scss';
// import PropTypes from 'prop-types';

// export const OrderOptionDate = () => <div>OrderOptionDate</div>;

// OrderOptionText.propTypes = {
//   id: PropTypes.string,
//   type: PropTypes.string,
// };

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';
// import { OrderOption } from './OrderOption';

const OrderOptionDate = ({ setOptionValue }) => {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    setOptionValue(startDate);
  }, []);

  const handleChange = (date) => {
    setStartDate(date);
    setOptionValue(date);
  };

  return <DatePicker selected={startDate} onChange={handleChange} />;
};

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
