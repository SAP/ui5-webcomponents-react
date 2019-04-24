import React from 'react';

const fullPage = (story) => (
  <div
    style={{
      position: 'fixed',
      top: '1rem',
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden'
    }}
  >
    {story()}
  </div>
);

export default fullPage;
