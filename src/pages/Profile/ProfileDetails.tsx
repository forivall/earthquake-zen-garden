import React from 'react';
import { ProfileData } from '../../types/data.types';
import styles from './Profile.module.css';

interface Props {
  profile: ProfileData;
}

// const useSorting = () => {};

const ProfileDetails: React.VFC<Props> = (props) => {
  const { profile } = props;
  return (
    <dl className={styles.profileGrid}>
      <dt>First name</dt>
      <dd>{profile.firstName}</dd>
      <dt>Last name</dt>
      <dd>{profile.lastName}</dd>
      <dt>Phone</dt>
      <dd>{profile.phone}</dd>
      <dt>Email</dt>
      <dd>{profile.email}</dd>
      <dt>Bio</dt>
      <dd>{profile.bio}</dd>
    </dl>
  );
};

export default ProfileDetails;
