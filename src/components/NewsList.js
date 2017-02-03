import React, { Component } from 'react';
import axios from 'axios';
import { key } from '../../config';
import { Card, CardHeader, CardMedia } from 'material-ui/Card'

class NewsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }
  componentDidMount () {
    axios.get(`https://newsapi.org/v1/articles?source=the-washington-post&apiKey=${key}`)
      .then(response => {
        console.log(response)
        this.setState({
          articles: response.data.articles
        })
      })
  }

  render () {
    return (
      <div className="container">
        <h1>New Articles</h1>
        {this.state.articles.map(a => {
          return (  
            <a href={a.url}>
              <Card style={{width: '50%', marginBottom: '2rem'}} key={a.title}>
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

console.log(NewsList)
export default NewsList;