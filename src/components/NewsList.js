import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { key } from '../../config';
import { Card, CardHeader, CardMedia } from 'material-ui/Card'

class NewsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      error: ''
    };
  }
  
  componentDidMount () {
    function getNYT () {
      return axios.get(`https://newsapi.org/v1/articles?source=the-new-york-times&apiKey=${key}`)
    }

    function getWaPo() {
      return axios.get(`https://newsapi.org/v1/articles?source=the-washington-post&apiKey=${key}`)
    }

    function getDieZeit() {
      return axios.get(`https://newsapi.org/v1/articles?source=die-zeit&apiKey=${key}`)
    }

    axios.all([getNYT(), getWaPo(), getDieZeit()])
      .then(axios.spread((res1, res2, res3) =>{
        this.setState({
          articles: _.shuffle([ ...res1.data.articles, ...res2.data.articles, ...res3.data.articles ])
        })
      }))
      .catch((error) => {
        this.setState({ error: 'Something went wrong with this request'})
      })
  }

  render () {
    return (
      <div className="container">
        <h1>New Articles</h1>
        { this.state.error ? this.state.error : null}
        {this.state.articles.map(a => {
          return (  
            <a key={a.title} href={a.url}>
              <Card style={{width: '50%', marginBottom: '2rem'}}>
                <CardHeader title={a.title} />
                <CardMedia>
                  <img src={a.urlToImage} />
                </CardMedia>
              </Card>
            </a>
          )
        })}
      </div>
    )
  }
}

export default NewsList;