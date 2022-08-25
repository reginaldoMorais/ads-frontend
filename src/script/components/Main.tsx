import { AppContext } from '../../lib/context';
import * as React from 'react';

export const Main: React.FC = () => {
  const { appContext } = React.useContext(AppContext);
  return <ul>{appContext.years.length}</ul>;
};
