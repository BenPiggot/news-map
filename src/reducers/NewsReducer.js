import { FETCH_NEWS_FEED } from '../actions/types';

const setArticles = (state, action) => {
  const newState = {}
  Object.assign(newState, state, { articles: action.payload })
  return newState
}

export default function(state = {articles: []}, action) {
  switch(action.type) {
    case FETCH_NEWS_FEED:
      return setArticles(state, action)
    default:
      return state;
  }
}