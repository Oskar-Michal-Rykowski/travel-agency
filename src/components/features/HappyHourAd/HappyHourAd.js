import React from 'react';
import PropTypes from 'prop-types';

class HappyHourAd extends React.Component {
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

  render() {
    const { title, promoDescription } = this.props;
    return (
      <div>
        <h3 className="title">{title}</h3>
        <div className="promoDescription">{promoDescription}</div>
      </div>
    );
  }
}

export default HappyHourAd;
