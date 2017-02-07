import { FETCH_NEWS_FEED, SHOW_FOOTER } from '../actions/types';

const setArticles = (state, action) => {
  const newState = {};
  Object.assign(newState, state, { articles: action.payload });
  return newState;
}

const setFooter = (state, action) => {
  const newState = {};
  Object.assign(newState, state, { footer: true });
  return newState
}
 
export default function(state = { articles: [], footer: false }, action) {
  switch(action.type) {
    case FETCH_NEWS_FEED:
      return setArticles(state, action);
    case SHOW_FOOTER:
      return setFooter(state, action)
    default:
      return state;
  }
}