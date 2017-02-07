import React from 'react';
import NewsList from '../components/NewsList'
import SourcesSelector from '../components/SourcesSelector';
import Header from '../components/Header';
import Footer from '../components/Footer'

const AppContainer = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <SourcesSelector />
        <NewsList />
      </div>
      <Footer />
    </div>
  )
}

export default AppContainer;