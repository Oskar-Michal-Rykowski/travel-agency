// import styles from './OrderOption.module.scss';
// import PropTypes from 'prop-types';

// export const OrderOptionDate = () => <div>OrderOptionDate</div>;

// OrderOptionText.propTypes = {
//   id: PropTypes.string,
//   type: PropTypes.string,
// };

import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
// import { OrderOption } from './OrderOption';

class OrderOptionDate extends React.Component {
  state = {
    startDate: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default OrderOptionDate;
