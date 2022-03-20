import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './AppHeader';
import { AppDataProps } from './App.types';

const AppContainer: React.VFC<AppDataProps> = (props) => {
  const { data, err } = props;

  if (err) {
    return (
      <div>
        <span style={{ background: 'red' }}>ERROR:</span>
        {err.message}
      </div>
    );
  }

  if (!data) {
    // loading
    return <React.Fragment />;
  }

  return (
    <>
      <Header site={data.site} profile={data.profile} />
      <Outlet />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default AppContainer;
