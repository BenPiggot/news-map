import { FETCH_NEWS_FEED } from './types';
import axios from 'axios';
import _ from 'lodash';
import { key } from '../../config';

function getNYT () {
  return axios.get(`https://newsapi.org/v1/articles?source=the-new-york-times&apiKey=${key}`)
}

function getWaPo() {
  return axios.get(`https://newsapi.org/v1/articles?source=the-washington-post&apiKey=${key}`)
}

function getDieZeit() {
  return axios.get(`https://newsapi.org/v1/articles?source=die-zeit&apiKey=${key}`)
}

export function fetchNews() {
  return function (dispatch) {
    axios.all([getNYT(), getWaPo(), getDieZeit()])
      .then(axios.spread((res1, res2, res3) => {
        dispatch({
          type: FETCH_NEWS_FEED,
          payload: _.shuffle([ ...res1.data.articles, ...res2.data.articles, ...res3.data.articles ])
        })
      }))
      .catch((error) => {
        console.log(error)
      })
  }
}