import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Card, CardHeader, CardMedia } from 'material-ui/Card'
import { fetchNews } from '../actions/actions';

class NewsList extends Component {
  componentWillMount () {
    this.props.fetchNews();
  }

  render () {
    const styles = {
      height: '300px',
      width: '30%', 
      marginBottom: '2rem', 
      marginRight: '2%', 
      display: 'inline-block'
    }
    return (
      <div>
        <h1>New Articles</h1>
        {this.props.articles.map(a => {
          return (  
            <a key={a.title} href={a.url}>
              <Card key={a.title} style={styles}>
                <CardHeader title={a.title}  style={{height: 125}}/>
                <CardMedia style={{ maxHeight: 150, overflow: 'hidden', width: 'auto'}}>
                  <img  src={a.urlToImage} />
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