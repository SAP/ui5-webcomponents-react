import React from 'react'
import { useHistory } from 'react-router-dom';

import CenteredLink from '../../../components/CenteredLink/CenteredLink';
import BrowserURL from '../../../util/BrowserURL';

export default function TodoList() {
  const history = useHistory();

  return (
    <div>
      <CenteredLink onClick={() => history.push('/dontexist')} text='Test NotFound Page' />
      <br />
      <CenteredLink onClick={() => history.push(BrowserURL.BUGGY)} text='Test Error Page' />
    </div>
  )
}
