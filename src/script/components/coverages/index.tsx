import React, { useContext } from 'react';
import { AppContext, IAppContextState, ICoverage } from '../../../lib/context';

const Coverages = () => {
  const { appContext, setAppContext } = useContext<IAppContextState>(AppContext);

  const coverages = Object.keys(appContext.coverage);

  const updateCoverage = (year: number, vehicleModel: string) => {
    const newCoverage: ICoverage = appContext.coverage;

    const vehicleCoverage: number[] = newCoverage[vehicleModel];
    const coverageIndex = vehicleCoverage.findIndex((item) => item === year);

    vehicleCoverage.includes(year) ? vehicleCoverage.splice(coverageIndex, 1) : vehicleCoverage.push(year);

    newCoverage[vehicleModel] = vehicleCoverage;

    setAppContext({ ...appContext, coverage: newCoverage });
  };

  const renderCoverage = (years: number[], vehicleModel: string, coverage: number[]) => {
    return years.map((year, i) => (
      <li key={`${vehicleModel}-${year}-${i}`} className={coverage.includes(year) ? 'yes' : 'no'}>
        <button onClick={() => updateCoverage(year, vehicleModel)} />
      </li>
    ));
  };

  return (
    <div className="coverages">
      {coverages.map((key) => (
        <ul className={`${key.toLowerCase()}-coverage`}>{renderCoverage(appContext.years, key, appContext.coverage[key])}</ul>
      ))}
    </div>
  );
};

export default Coverages;
