import React from 'react';
import PropTypes from 'prop-types';

import styles from './HappyHourAd.scss';

class HappyHourAd extends React.Component {
  constructor() {
    super();

    setInterval(() => this.forceUpdate(), 1000);
  }

  static propTypes = {
    title: PropTypes.string,
    promoDescription: PropTypes.string,
  };

  getCountdownTime() {
    const currentTime = new Date();
    const nextNoon = new Date(
      Date.UTC(
        currentTime.getUTCFullYear(),
        currentTime.getUTCMonth(),
        currentTime.getUTCDate(),
        12,
        0,
        0,
        0
      )
    );

    if (currentTime.getUTCHours() >= 12) {
      nextNoon.setUTCDate(currentTime.getUTCDate() + 1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime()) / 1000);
  }

  render() {
    const { title, promoDescription } = this.props;

    const clock = this.getCountdownTime();
    // const slogan = 'Your time is now! Until 12:59 you can buy with discounts!';
    let textInDescription = '';

    if (clock > 23 * 60 * 60) {
      textInDescription = promoDescription;
    } else {
      textInDescription = clock;
    }

    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>{textInDescription}</div>
      </div>
    );
  }
}

export default HappyHourAd;
