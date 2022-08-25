import React from 'react';
import json from '../data/coverage.json';

export interface ICoverage {
  ILX: number[];
  MDX: number[];
  RDX: number[];
  RLX: number[];
  TL: number[];
  TLX: number[];
  TSX: number[];
}

export interface IAppContext {
  'vehicle-models': string[];
  years: number[];
  coverage: ICoverage;
}

export const AppContext = React.createContext({
  appContext: json,
  setAppContext: (f) => f,
});
