import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileData, SiteData } from '../types/data.types';
import styles from './App.module.css';

interface Props {
  site: SiteData;
  profile: ProfileData;
}

const AppHeader: React.VFC<Props> = (props) => {
  const { site, profile } = props;
  return (
    <header className={styles.appHeader}>
      <Link to="/">
        <img className={styles.logo} src={site.logoImage} />
      </Link>
      <h1 className={styles.siteTitle}>{site.title}</h1>
      <nav>
        <Link to="/profile">Welcome, {profile.firstName}</Link>
      </nav>
    </header>
  );
};

export default AppHeader;
