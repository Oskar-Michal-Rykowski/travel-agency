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

const sendOrder = (options, tripCost) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
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

  fetch(url, fetchOptions)
    .then(function (response) {
      return response.json();
    })
    .then(function (parsedResponse) {
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({ tripCost, options, setOrderOption }) => {
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
      <Button onClick={() => sendOrder(options, tripCost)}>Order now!</Button>
    </div>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
