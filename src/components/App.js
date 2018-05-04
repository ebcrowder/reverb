import React from 'react';

import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <Searchbar />
      </div>
    </React.Fragment>
  );
};

export default App;
