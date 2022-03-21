import React from 'react';
import { RootData } from '../../types/data.types';
import ProfileDetails from './ProfileDetails';
import styles from './Profile.module.css';

interface Props {
  data: RootData | undefined;
}
const ProfilePageContainer: React.VFC<Props> = (props) => {
  const { data } = props;
  if (!data) return <React.Fragment />;

  return (
    <>
      <h3 className={styles.textCenter}>Profile</h3>
      <section className={styles.profileContent}>
        <figure className={styles.profileImageContainer}>
          <img className={styles.profileImage} src={data.profile.avatarImage} />
        </figure>
        <ProfileDetails profile={data.profile} />
      </section>
    </>
  );
};

export default ProfilePageContainer;
