import React from 'react';

import Container from './container';
import ContextViewer from './context-viewer';
import Coverages from './coverages';
import Logo from './logo';
import Vehicles from './vehicles';
import Years from './years';

export const Main: React.FC = () => {
  return (
    <>
      <Container>
        <Logo />
        <Years />
        <Vehicles />
        <Coverages />
      </Container>
      <ContextViewer />
    </>
  );
};
