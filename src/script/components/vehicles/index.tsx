import React, { useContext } from 'react';
import { AppContext, IAppContextState } from '../../../lib/context';

const Vehicles = () => {
  const { appContext } = useContext<IAppContextState>(AppContext);

  return (
    <div className="vehicles">
      <ul>
        {appContext['vehicle-models'].map((vehicle, i) => {
          return (
            <li key={`${vehicle}-${i}`}>
              <span>{vehicle}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Vehicles;
