import React from 'react';
import { Link } from 'react-router-dom';
import type { EarthquakeFeatureFormatted } from '../../helpers/formatting';
import { formatEarthquakeFeature } from '../../helpers/formatting';
import { EarthquakeData, EarthquakeFeature } from '../../types/data.types';
import styles from './Index.module.css';

interface Props {
  data: EarthquakeData;
}

interface EarthquakeFeatureWithFormatted extends EarthquakeFeature {
  formatted: EarthquakeFeatureFormatted;
}

type TableStateReturn = [EarthquakeFeatureWithFormatted[]];

const useTableState = (features: EarthquakeFeature[]): TableStateReturn => {
  const formatted = React.useMemo(
    () =>
      features.map((f) => ({ ...f, formatted: formatEarthquakeFeature(f) })),
    [features]
  );

  return [formatted];
};

const EarthquakeTable: React.VFC<Props> = (props) => {
  const { data } = props;

  const [features] = useTableState(data.features);

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
        {features.map((feature, i) => {
          const id = feature.id ?? `__index__${i}`;
          return (
            <tr key={id}>
              <td>
                <Link to={`/earthquake/${id}`}>{feature.properties.place}</Link>
              </td>
              <td className={styles.textCenter}>{feature.properties.mag}</td>
              <td
                title={`${feature.formatted.timeIso}\nLocal time: ${feature.formatted.timeLocal}`}
              >
                {feature.formatted.time}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EarthquakeTable;
