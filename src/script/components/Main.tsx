import React, { useContext } from 'react';
import { AppContext, IAppContextState } from '../../lib/context';

import Coverages from './coverages';
import Logo from './logo';
import Vehicles from './vehicles';
import Years from './years';

export const Main: React.FC = () => {
  const { appContext } = useContext<IAppContextState>(AppContext);

  return (
    <>
      <div className="container">
        <Logo />
        <Years />
        <Vehicles />
        <Coverages />
      </div>
      <div className="json-viewer">
        <pre>{JSON.stringify(appContext, null, 2)}</pre>
      </div>
    </>
  );
};
