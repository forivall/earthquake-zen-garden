import React from 'react';
import { formatEarthquakeFeature } from '../../helpers/formatting';
import { memoUse } from '../../helpers/meta-hooks';
import { EarthquakeFeature } from '../../types/data.types';
import styles from './Detail.module.css';

interface Props {
  geoFeature: EarthquakeFeature;
}

const useFormatted = memoUse(formatEarthquakeFeature);

const EarthquakeDetails: React.VFC<Props> = (props) => {
  const { geoFeature } = props;
  const earthquake = geoFeature.properties;

  const formatted = formatEarthquakeFeature(geoFeature);

  return (
    <dl className={styles.detailsGrid}>
      <dt>Title</dt>
      <dd>{earthquake.title}</dd>
      <dt>Magnitude</dt>
      <dd>{earthquake.mag}</dd>
      <dt>Time</dt>
      <dd title={`${formatted.timeIso}\nLocal time: ${formatted.timeLocal}`}>
        {formatted.time}
      </dd>
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
