import React from 'react';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';

import DatePicker from 'react-datepicker';

class OrderOptionDate extends React.Component {
  static propTypes = {
    setOptionValue: PropTypes.func,
  };

  state = {
    startDate: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
    this.props.setOptionValue(date);
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

// import React, { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
// import PropTypes from 'prop-types';

// import 'react-datepicker/dist/react-datepicker.css';

// const OrderOptionDate = ({ setOptionValue }) => {
//   const [startDate, setStartDate] = useState(new Date());

//   useEffect(() => {
//     setOptionValue(startDate);
//   }, [startDate]);

//   const handleChange = (date) => {
//     setStartDate(date);
//   };

//   return <DatePicker selected={startDate} onChange={handleChange} />;
// };

// OrderOptionDate.propTypes = {
//   setOptionValue: PropTypes.func,
// };

// export default OrderOptionDate;
