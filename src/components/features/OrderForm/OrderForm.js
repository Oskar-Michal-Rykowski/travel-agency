import PropTypes from 'prop-types';

import { Row, Col } from 'react-flexbox-grid';
import { OrderSummary } from '../OrderSummary/OrderSummary';

const OrderForm = (props) => {
  return (
    <Row>
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
