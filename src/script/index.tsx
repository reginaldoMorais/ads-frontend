import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Main } from './components/Main';
import { AppContext } from '../lib/context';
import json from '../data/coverage.json';

const App = () => {
  const [appContext, setAppContext] = useState(json);
  return (
    <AppContext.Provider value={{ appContext, setAppContext }}>
      <Main />
    </AppContext.Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));
