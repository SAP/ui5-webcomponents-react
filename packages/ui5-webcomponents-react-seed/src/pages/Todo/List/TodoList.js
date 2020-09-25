import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import { MobileView, BrowserView, IEView, isMobile, isTablet, isDesktop, isIE, isChrome, isOpera } from 'react-device-detect';

import HyperLink from '../../../components/HyperLink/HyperLink';
import BrowserProvider from '../../../util/URL/BrowserProvider';
import ComponentValidator from '../../../auth/Components/Validator';
import TodoListPagination from './TodoListPagination';

export default function TodoList() {
  const history = useHistory();

  return (
    <>
      <Helmet title="List - TodoList App" />
      <h1>Routing</h1>
      <HyperLink onClick={() => history.push('/dontexist')} text="Test NotFound Page" />
      <br />
      <HyperLink onClick={() => history.push(BrowserProvider.BUGGY)} text="Test Error Page" />
      <br />

      <ComponentValidator allowedAuthorities={['canAccessDropApplication']} authorityKey="permissions">
        <h1>Component Validator</h1>
        <p>Drop Application (this is a restricted text and you should not see unless you have access)</p>
      </ComponentValidator>

      <h1>Device Detect</h1>
      <MobileView>
        <p>This is a text visible only for MOBILE</p>
      </MobileView>
      <BrowserView>
        <p>This is a text visible only for DESKTOP</p>
      </BrowserView>
      <p>{isMobile ? 'This text appears when is MOBILE' : 'This text appears when is not MOBILE'}</p>
      <p>{isTablet ? 'This text appears when is TABLET' : 'This text appears when is not TABLET'}</p>
      <p>{isDesktop ? 'This text appears when is DESKTOP' : 'This text appears when is not DESKTOP'}</p>

      <h1>Browser Detect</h1>
      <IEView>
        <p>This is a text visible only for INTERNET EXPLORER</p>
      </IEView>
      <p>{isChrome ? 'This Text is rendered only for CHROME' : 'This Text is rendered only when is NOT CHROME'}</p>
      <p>{isIE ? 'This Text is rendered only for IE' : 'This Text is rendered only when is NOT IE'}</p>
      <p>{isOpera ? 'This Text is rendered only for OPERA' : 'This Text is rendered only when is NOT OPERA'}</p>

      <h1>Pagination</h1>
      <TodoListPagination />
    </>
  );
}
