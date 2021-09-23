import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

import styles from './TripSummary.module.scss';

const TripSummary = ({ id, image, name, cost, days, tags, setTrip }) => (
  <Col xs={12} sm={6} lg={4} className={styles.column}>
    <Link
      to={`/trip/${id}`}
      className={styles.link}
      onClick={() => setTrip(id)}
    >
      <article className={styles.component}>
        <img src={image} alt={name} />
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.details}>
          <span>{days} days</span>
          <span>from {cost}</span>
        </div>
        {tags && tags.length && (
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span className={styles.tag} key={tag.toString()}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  </Col>
);

TripSummary.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string,
  name: PropTypes.string,
  intro: PropTypes.string,
  cost: PropTypes.string,
  days: PropTypes.number,
  tags: PropTypes.array.isRequired,
  setTrip: PropTypes.func,
};

export default TripSummary;
