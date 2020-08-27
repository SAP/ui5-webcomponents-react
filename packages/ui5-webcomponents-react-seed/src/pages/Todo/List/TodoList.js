import React from 'react'
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import CenteredLink from '../../../components/CenteredLink/CenteredLink';
import BrowserURL from '../../../util/BrowserURL';
import ComponentValidator from '../../../auth/ComponentValidator';

export default function TodoList() {
  const history = useHistory();

  return (
    <>
      <Helmet title='List - TodoList App' />
      <CenteredLink
        onClick={() => history.push('/dontexist')}
        text='Test NotFound Page' />
      <br />
      <CenteredLink
        onClick={() => history.push(BrowserURL.BUGGY)}
        text='Test Error Page' />
      <br />
      <ComponentValidator
        allowedAuthorities={['canAccessDropApplication']}
        authorityKey='permissions'>
        <CenteredLink
          text='Drop Application (this is a restricted text and you should not see unless you have access)' />
      </ComponentValidator>
    </>
  )
}
