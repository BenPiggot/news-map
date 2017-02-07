import { FETCH_NEWS_FEED, SELECT_SEARCH, SHOW_FOOTER } from './types';
import sources from './sources';
import axios from 'axios';
import _ from 'lodash';
import { key } from '../../config';

function createRequest(source) {
  return axios.get(`https://newsapi.org/v1/articles?source=${source}&apiKey=${key}`)
}

export function fetchNews(value = 'us') {
  const newsSources = sources[value];
  const requests = newsSources.map(newspaper => createRequest(newspaper));

  return function (dispatch) {
    axios.all(requests)
      .then((response) => {
        let responseArray = response.map(a => a.data.articles)
        dispatch({
          type: FETCH_NEWS_FEED,
          payload: _.shuffle(_.flatten(responseArray))
        })

        dispatch({
          type: SHOW_FOOTER,
          payload: true
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
