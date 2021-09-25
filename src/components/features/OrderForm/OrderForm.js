import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import React from 'react';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';

import { OrderSummary } from '../OrderSummary/OrderSummary';
import { OrderOption } from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import Button from '../../common/Button/Button';
import settings from '../../../data/settings';

const sendOrder = (options, tripCost, tripName, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const path = window.location.href;
  const str = path.split('/');
  const tripId = str[str.length - 1];
  console.log('countryCode', countryCode);

  const payload = {
    ...options,
    totalCost,
    tripName,
    tripId,
    countryCode,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };
  if (payload.name === '' || payload.contact === '') {
    alert('Fill name and contact!');
  } else {
    fetch(url, fetchOptions)
      .then(function (response) {
        return response.json();
      })
      .then(function (parsedResponse) {
        console.log('parsedResponse', parsedResponse);
      });
  }
};

const OrderForm = ({
  countryCode,
  tripName,
  tripCost,
  options,
  setOrderOption,
}) => {
  return (
    <div>
      <Row>
        {pricing.map((option) => (
          <Col md={4} key={option.id}>
            <OrderOption
              {...option}
              currentValue={options[option.id]}
              setOrderOption={setOrderOption}
            />
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={options}></OrderSummary>
        </Col>
      </Row>
      <Button
        onClick={() => sendOrder(options, tripCost, tripName, countryCode)}
      >
        Order now!
      </Button>
    </div>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripName: PropTypes.string,
  countryCode: PropTypes.string,
};

export default OrderForm;
