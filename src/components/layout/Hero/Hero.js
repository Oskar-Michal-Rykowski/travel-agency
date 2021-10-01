import React from 'react';
import PropTypes from 'prop-types';

import HappyHourAd from '../../features/HappyHourAd/HappyHourAd';
import CountDaysTo from '../../features/CountDaysTo/CountDaysTo';
import styles from './Hero.module.scss';

const Hero = ({ variant = '', titleText, imageSrc, ...otherProps }) => (
  <div
    {...otherProps}
    className={
      styles.component +
      variant
        .split(' ')
        .map((name) => ' ' + (styles[name] || name))
        .join('')
    }
  >
    <h2 className={styles.title}>{titleText}</h2>

    {/* eslint-disable-next-line  */}
    <img className={styles.image} alt="hero-image" src={imageSrc} />
    <div className={styles.countDaysTo}>
      <CountDaysTo
        countdownTo="to summer!"
        monthFrom={5}
        dayFrom={21}
        monthTo={8}
        dayTo={23}
      />
    </div>
    <div className={styles.happyHour}>
      <HappyHourAd
        title="Happy Hour"
        promoDescription="Your time is now! Until 12:59 you can buy with discounts!"
      />
    </div>
  </div>
);

Hero.propTypes = {
  variant: PropTypes.string,
  titleText: PropTypes.node.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Hero;
