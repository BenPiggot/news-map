import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Card, CardHeader, CardMedia } from 'material-ui/Card'
import { fetchNews } from '../actions/actions';

class NewsList extends Component {
  componentWillMount () {
    this.props.fetchNews();
  }

  render () {
    return (
      <div className="container">
        <h1>New Articles</h1>
        {this.props.articles.map(a => {
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

const mapStateToProps = (state) => {
  console.log(state)
  return {
    articles: state.news.articles
  }
}

export default connect(mapStateToProps, { fetchNews })(NewsList);