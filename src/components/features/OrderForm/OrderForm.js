import PropTypes from 'prop-types';

import { Row, Col } from 'react-flexbox-grid';
import { OrderSummary } from '../OrderSummary/OrderSummary';
import { OrderOption } from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
// {/* Iterujemy po bazie danych "pricing". Option to jeden element
//       w pricing. Potem rozkładamy elemnty każdej Option na propsy.
//       W currentValue przekazujemy to samo co w kluczu? Po co? */}
const OrderForm = ({ tripCost, options, setOrderOption }) => {
  return (
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
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
