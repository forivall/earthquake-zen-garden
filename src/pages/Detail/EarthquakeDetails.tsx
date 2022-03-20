import { Feature, Point } from 'geojson';
import React from 'react';
import { Properties } from '../../types/data.types';

interface Props {
  geoFeature: Feature<Point, Properties>;
}

// const useSorting = () => {};

const EarthquakeDetails: React.VFC<Props> = (props) => {
  const { geoFeature } = props;
  const earthquake = geoFeature.properties;
  return (
    <dl>
      <dt>Title</dt>
      <dd>{earthquake.title}</dd>
      <dt>Magnitude</dt>
      <dd>{earthquake.mag}</dd>
      <dt>Time</dt>
      <dd>{earthquake.time}</dd>
      <dt>Status</dt>
      <dd>{earthquake.status}</dd>
      <dt>Tsunami</dt>
      <dd>{earthquake.tsunami}</dd>
      <dt>Type</dt>
      <dd>{earthquake.type}</dd>
    </dl>
  );
};

export default EarthquakeDetails;
