import React from 'react';
import { useParams } from 'react-router-dom';

import { memoUse } from '../../helpers/meta-hooks';
import { RootData } from '../../types/data.types';
import EarthquakeDetails from './EarthquakeDetails';

interface Props {
  data: RootData | undefined;
}

const selectById = (
  data: RootData | undefined,
  id: string | number | undefined
) => {
  if (!data || id === undefined) return;

  const { features } = data.data;

  if (typeof id === 'string' && id.startsWith('__index__')) {
    const i = Number(id.slice(9)); // 9 = length of '__index__'
    return features[i];
  }

  return features.find((feat) => feat.id === id);
};

const useSelectById = memoUse(selectById);

const Detail: React.VFC<Props> = (props) => {
  const { data } = props;
  const { id } = useParams();
  const geoFeature = useSelectById(data, id);

  if (!geoFeature) return <React.Fragment />;

  return <EarthquakeDetails geoFeature={geoFeature} />;
};

export default Detail;
