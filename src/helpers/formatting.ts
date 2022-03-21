import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import { EarthquakeFeature } from '../types/data.types';

dayjs.extend(utc);

export interface EarthquakeFeatureFormatted {
  timeIso: string;
  time: string;
  timeLocal: string;
}

const dateFormat = 'MMM D, YYYY, h:mm A';

export function formatEarthquakeFeature(
  feat: EarthquakeFeature
): EarthquakeFeatureFormatted {
  const timeDate = dayjs(feat.properties.time);
  const local = timeDate.utcOffset(feat.properties.tz);
  return {
    timeIso: timeDate.toISOString(),
    time: timeDate.format(dateFormat),
    timeLocal: local.format(dateFormat),
  };
}
