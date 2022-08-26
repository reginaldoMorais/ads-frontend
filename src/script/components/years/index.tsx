import React, { useContext } from 'react';
import { AppContext, IAppContextState } from '../../../lib/context';

const Years = () => {
  const { appContext } = useContext<IAppContextState>(AppContext);

  return (
    <div className="years">
      <ul>
        {appContext.years.map((year, i) => (
          <li key={`${year}-${i}`}>
            <span>{year}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Years;
