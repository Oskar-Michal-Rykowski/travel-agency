import React from 'react';
import PropTypes from 'prop-types';

class HappyHourAd extends React.Component {
  constructor() {
    super();

    /* run this.forceUpdate() every second */
    // nie jestem pewien czy tu dobrze zrobiłem
    setInterval(() => this.forceUpdate, 1000);
  }

  static propTypes = {
    title: PropTypes.string,
    promoDescription: PropTypes.string,
  };

  // state = {
  //   startDate: new Date(),
  // };

  // handleChange = (date) => {
  //   this.setState({
  //     startDate: date,
  //   });
  //   this.props.setOptionValue(date);
  // };

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
    const { title } = this.props;
    return (
      <div>
        <h3 className="title">{title}</h3>
        <div className="promoDescription">{this.getCountdownTime()}</div>
      </div>
    );
  }
}

export default HappyHourAd;
