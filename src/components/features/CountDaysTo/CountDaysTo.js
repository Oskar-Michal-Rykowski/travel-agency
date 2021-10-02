import React from 'react';
import PropTypes from 'prop-types';

import styles from './CountDaysTo.scss';

class CountDaysTo extends React.Component {
  constructor() {
    super();
    //pomyśleć nad updatem codzienne o 00:00
    setInterval(() => this.forceUpdate(), 24 * 60 * 60 * 1000);
  }

  static propTypes = {
    countdownTo: PropTypes.string,
    monthFrom: PropTypes.number,
    dayFrom: PropTypes.number,
    monthTo: PropTypes.number,
    dayTo: PropTypes.number,
  };

  getCountdownDays(countdownTo, monthFrom, dayFrom, monthTo, dayTo) {
    // var today = new Date(2021, 7, 10);
    const today = new Date();
    const thisYear = today.getFullYear();
    const nextYear = today.getFullYear() + 1;

    const oneDay = 24 * 60 * 60 * 1000;

    const summerStartThisYear = new Date(thisYear, monthFrom, dayFrom);
    const summerEnd = new Date(thisYear, monthTo, dayTo);
    const summerStartNextYear = new Date(nextYear, monthFrom, dayFrom);

    let summerStart = summerStartThisYear;

    if (summerStartThisYear - today <= 0) {
      summerStart = summerStartNextYear;
    }

    const diffDays = Math.round(Math.abs((summerStart - today) / oneDay));

    let days = 'days';

    if (diffDays === 1) {
      days = 'day';
    }

    let finalText = diffDays + ` ${days} ${countdownTo}`;

    if (today > summerStartThisYear && today < summerEnd) {
      finalText = '';
    }

    return finalText;
  }

  render() {
    const { countdownTo, monthFrom, dayFrom, monthTo, dayTo } = this.props;

    return (
      <div className={styles.component}>
        <h3 className={styles.title}>
          {this.getCountdownDays(
            countdownTo,
            monthFrom,
            dayFrom,
            monthTo,
            dayTo
          )}
        </h3>
      </div>
    );
  }
}

export default CountDaysTo;
