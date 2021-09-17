import PropTypes from 'prop-types';

import { Row, Col } from 'react-flexbox-grid';
import { OrderSummary } from '../OrderSummary/OrderSummary';
import { OrderOption } from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';

const OrderForm = (props) => {
  return (
    <Row>
      {pricing.map((option) => (
        <Col md={4} key={option.id}>
          <OrderOption {...option} />
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary
          tripCost={props.tripCost}
          options={props.options}
        ></OrderSummary>
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.node,
};

export default OrderForm;

// {columns.map((columnData) => (
//   <Column key={columnData.id} {...columnData} />
// ))}
