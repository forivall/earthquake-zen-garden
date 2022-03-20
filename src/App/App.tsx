import React from 'react';
import { RootData } from '../types/data.types';
import AppRouting from './AppRouting';

// NOTE: a library should be used in a real-world scenario
const useFetchData = (): [RootData?, Error?] => {
  const [data, setData] = React.useState<RootData>();
  const [err, setErr] = React.useState<Error>();

  React.useEffect(() => {
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

  return <AppRouting data={data} err={err} />;
};

export default App;
