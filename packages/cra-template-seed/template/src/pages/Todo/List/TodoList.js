import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import { isChrome, isMobile, isTablet, isDesktop, isIE } from '@ui5/webcomponents-base/dist/Device';

import HyperLink from '../../../components/HyperLink/HyperLink';
import BrowserProvider from '../../../util/browser/BrowserProvider';
import ComponentValidator from '../../../auth/Components/Validator';
import TodoListPaginatedItems from './TodoListPaginatedItems';
import CenteredContent from '../../../components/Layout/CenteredContent';

export default function TodoList() {
  const history = useHistory();

  return (
    <CenteredContent>
      <Helmet
        title="List - TodoList
       App"
      />
      <h1>Routing</h1>
      <HyperLink onClick={() => history.push('/dontexist')} text="Test NotFound Page" />
      <br />
      <HyperLink onClick={() => history.push(BrowserProvider.getUrl('BUGGY'))} text="Test Error Page" />
      <br />

      <ComponentValidator allowedAuthorities={['canAccessDropApplication']} authorityKey="permissions">
        <h1>Component Validator</h1>
        <p>Drop Application (this is a restricted text and you should not see unless you have access)</p>
      </ComponentValidator>

      <h1>Device Detect</h1>
      <p>{isMobile() ? 'This text appears when is MOBILE' : 'This text appears when is not MOBILE'}</p>
      <p>{isTablet() ? 'This text appears when is TABLET' : 'This text appears when is not TABLET'}</p>
      <p>{isDesktop() ? 'This text appears when is DESKTOP' : 'This text appears when is not DESKTOP'}</p>

      <h1>Browser Detect</h1>
      <p>{isChrome() ? 'This Text is rendered only for CHROME' : 'This Text is rendered only when is NOT CHROME'}</p>
      <p>{isIE() ? 'This Text is rendered only for IE' : 'This Text is rendered only when is NOT IE'}</p>

      <h1>Pagination + Edition (Formik and Yup)</h1>
      <TodoListPaginatedItems history={history} />
    </CenteredContent>
  );
}
