import React, { useState } from 'react';
import { Button, ProgressIndicator, ValueState } from '../..';

export const Demo = () => {
  const [m, sM] = useState(false);
  const hC = () => {
    sM(!m);
  };

  return (
    <>
      <Button onClick={hC}>Click</Button>
      {m && <div style={{ height: '200px', backgroundColor: 'lightblue' }} />}
      <ProgressIndicator value={12} valueState={ValueState.Warning} />
    </>
  );
};
