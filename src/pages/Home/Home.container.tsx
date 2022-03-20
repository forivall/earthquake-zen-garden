import React from 'react';
import { RootData } from '../../types/data.types';
import EarthquakeTable from './EarthquakeTable';

interface Props {
  data: RootData | undefined;
}

const Home: React.VFC<Props> = (props) => {
  const { data } = props;
  if (!data) return <React.Fragment />;

  return <EarthquakeTable data={data.data} />;
};

export default Home;
