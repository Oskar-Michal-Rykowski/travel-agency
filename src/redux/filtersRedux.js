/* SELECTORS */

export const getAllFilters = ({ filters }) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');

// TODO - add other action types
export const ADD_TAG = createActionName('ADD_TAG');
export const DELETE_TAG = createActionName('DELETE_TAG');

export const CHANGE_DURATION = createActionName('CHANGE_DURATION');

// action creators
export const changeSearchPhrase = (payload) => ({
  payload,
  type: CHANGE_PHRASE,
});
// TODO - add other action creators

export const addTag = (payload) => ({ payload, type: ADD_TAG });
export const deleteTag = (payload) => ({ payload, type: DELETE_TAG });

export const changeSearchDuration = (payload) => ({
  payload,
  type: CHANGE_DURATION,
});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case ADD_TAG:
      return {
        ...statePart,
        tags: [...statePart.tags, action.payload],
      };
    case DELETE_TAG:
      return {
        ...statePart,
        tags: statePart.tags.filter((tag) => tag !== action.payload),
      };
    case CHANGE_DURATION:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          [action.payload.type]: parseInt(action.payload.value),
        },
      };
    default:
      return statePart;
  }
}
