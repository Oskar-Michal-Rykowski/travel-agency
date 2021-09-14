import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase,  deleteTag, addTag, changeSearchDuration} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  addTag: tag => dispatch(addTag(tag)),
  deleteTag: tag => dispatch(deleteTag(tag)),
  changeSearchDuration: (type, value) => dispatch(changeSearchDuration(type, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
