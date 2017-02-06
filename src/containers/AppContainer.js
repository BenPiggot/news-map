import React from 'react';
import NewsList from '../components/NewsList'
import SourcesSelector from '../components/SourcesSelector';
import Header from '../components/Header';

const AppContainer = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <SourcesSelector />
        <NewsList />
      </div>
    </div>
  )
}

export default AppContainer;