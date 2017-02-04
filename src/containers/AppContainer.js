import React from 'react';
import NewsList from '../components/NewsList'
import SourcesSelector from '../components/SourcesSelector';

const AppContainer = () => {
  return (
    <div className="container">
      <SourcesSelector />
      <NewsList />
    </div>
  )
}

export default AppContainer;