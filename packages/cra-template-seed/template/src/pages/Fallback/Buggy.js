// WARNING: This is only for demonstration. Do not use it directly in your application. */

import React from 'react';

/* eslint-disable no-unused-vars */
class Buggy extends React.Component {
  componentDidMount() {
    throw new Error('An error has occured in Buggy component!');
  }

  render() {
    return (
      <>
        <h2>Hey, I'm buggy</h2>
      </>
    );
  }
}

export default Buggy;
