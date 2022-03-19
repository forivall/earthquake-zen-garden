import React, { useEffect } from 'react';
import { RootData } from '../../types/data.types';
import Header from '../AppHeader/AppHeader';

// NOTE: a library should be used in a real-world scenario
const useFetchData = (): [RootData?, Error?] => {
  const [data, setData] = React.useState<RootData>();
  const [err, setErr] = React.useState<Error>();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/data.json');
      const json = (await response.json()) as RootData;

      setData(json);
    }
    fetchData().catch((err) => {
      setErr(err);
    });
  }, []);

  return [data, err];
};

const App: React.VFC = () => {
  const [data, err] = useFetchData();

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
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default App;
