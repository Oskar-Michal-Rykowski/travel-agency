import { connect } from 'react-redux';
import Trips from './Trips';
import { getFilteredTrips, setTrip } from '../../../redux/tripsRedux';

const mapStateToProps = (state) => ({
  trips: getFilteredTrips(state),
  setTrip: setTrip,
});

const mapDispatchToProps = (dispatch) => ({
  setTrip: (trip) => dispatch(setTrip(trip)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Trips);
