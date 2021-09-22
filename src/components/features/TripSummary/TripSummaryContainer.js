import { connect } from 'react-redux';
import TripSummary from './TripSummary';
import { setTrip } from '../../../redux/orderRedux';

const mapDispatchToProps = (dispatch) => ({
  setTrip: (id) => dispatch(setTrip(id)),
});

export default connect(null, mapDispatchToProps)(TripSummary);
