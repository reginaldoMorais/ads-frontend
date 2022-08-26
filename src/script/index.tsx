import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { AppContext } from '../lib/context';
import json from '../data/coverage.json';

import { Main } from './components/Main';

const App = () => {
  /**
   * This approach is not performative because we are updating the entire context.
   * All components that subscribe to the context will be reloaded even if the used block is not changed.
   *
   * As a refactoring we can separate the contexts by segmenting the update calls: 'const [coverage, setCoverage] = useState(json.coverage);'.
   * Or we can implement global state control with Redux or Recoil
   */
  const [appContext, setAppContext] = useState(json);

  return (
    <AppContext.Provider value={{ appContext, setAppContext }}>
      <Main />
    </AppContext.Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));
