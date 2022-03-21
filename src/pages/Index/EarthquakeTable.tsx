import React from 'react';
import { Link } from 'react-router-dom';
import { EarthquakeData } from '../../types/data.types';
import styles from './Index.module.css';

interface Props {
  data: EarthquakeData;
}

// const useSorting = () => {};

const EarthquakeTable: React.VFC<Props> = (props) => {
  const { data } = props;
  return (
    <table className={styles.earthquakeTable}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Magnitude</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {data.features.map((feature, i) => {
          const id = feature.id ?? `__index__${i}`;
          return (
            <tr key={id}>
              <td>
                <Link to={`/earthquake/${id}`}>{feature.properties.place}</Link>
              </td>
              <td className={styles.textCenter}>{feature.properties.mag}</td>
              {/* TODO: format time */}
              <td>{feature.properties.time}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EarthquakeTable;
