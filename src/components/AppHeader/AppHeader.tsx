import React from 'react';
import { ProfileData, SiteData } from '../../types/data.types';
import styles from './AppHeader.module.css';

interface Props {
  site: SiteData;
  profile: ProfileData;
}

const AppHeader: React.VFC<Props> = (props) => {
  const { site, profile } = props;
  return (
    <header className={styles.appHeader}>
      <a href="/">
        <img className={styles.logo} src={site.logoImage} />
      </a>
      <h1 className={styles.siteTitle}>{site.title}</h1>
      <nav>
        <a href="/profile">Welcome, {profile.firstName}</a>
      </nav>
    </header>
  );
};

export default AppHeader;
