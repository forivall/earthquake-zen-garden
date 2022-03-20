import React from 'react';
import {RootData} from '../../types/data.types';
import ProfileDetails from './ProfileDetails';

interface Props {
  data: RootData | undefined;
}
const Profile: React.VFC<Props> = (props) => {
  const { data } = props;
  if (!data) return <React.Fragment />;

  return <ProfileDetails profile={data.profile} />;
};

export default Profile;
