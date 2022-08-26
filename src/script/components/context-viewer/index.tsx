import React, { useContext } from 'react';
import { AppContext, IAppContextState } from '../../../lib/context';

const ContextViewer = () => {
  const { appContext } = useContext<IAppContextState>(AppContext);

  return (
    <div className="context-viewer">
      <pre>{JSON.stringify(appContext, null, 2)}</pre>
    </div>
  );
};

export default ContextViewer;
