import React from 'react';
import { RootData } from '../../types/data.types';
import EarthquakeTable from './EarthquakeTable';
import styles from './Index.module.css';

interface Props {
  data: RootData | undefined;
}

const IndexPageContainer: React.VFC<Props> = (props) => {
  const { data } = props;
  if (!data) return <React.Fragment />;

  return (
    <>
      <h3 className={styles.textCenter}>{data.data.metadata.title}</h3>
      <EarthquakeTable data={data.data} />
    </>
  );
};

export default IndexPageContainer;
