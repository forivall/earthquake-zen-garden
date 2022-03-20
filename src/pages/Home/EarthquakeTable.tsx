import React from 'react';
import { Link } from 'react-router-dom';
import { EarthquakeData } from '../../types/data.types';

interface Props {
  data: EarthquakeData;
}

// const useSorting = () => {};

const EarthquakeTable: React.VFC<Props> = (props) => {
  const { data } = props;
  return (
    <table>
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
              <td>{feature.properties.mag}</td>
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
