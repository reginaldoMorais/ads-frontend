import React from 'react';
import { IContainer } from './type';

const Container = ({ children }: IContainer) => {
  return <div className="container">{children}</div>;
};

export default Container;
