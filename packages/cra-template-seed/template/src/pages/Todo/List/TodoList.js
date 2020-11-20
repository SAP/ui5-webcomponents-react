import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import { isChrome, isMobile, isTablet, isDesktop, isIE } from '@ui5/webcomponents-base/dist/Device';

import { Link } from '@ui5/webcomponents-react/lib/Link';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import { getUrl } from '../../../util/browser/BrowserProvider';
import ComponentWithAuthorizationRestriction from '../../../auth/ComponentWithAuthorizationRestriction';
import CenteredContent from '../../../components/Layout/CenteredContent';
import TodoListPaginatedItems from './TodoListPaginatedItems';

const TodoList = () => {
  const history = useHistory();

  return (
    <CenteredContent>
      <Helmet title="List - TodoList App" />
      <Title level={TitleLevel.H1}>Todo List</Title>
      <br />

      <Title level={TitleLevel.H3}>Routing</Title>
      <br />
      <Link onClick={() => history.push('/dontexist')}>Test NotFound Page</Link>
      <br />
      <Link onClick={() => history.push(getUrl('BUGGY'))}>Test Error Page</Link>
      <br />
      <br />
      <ComponentWithAuthorizationRestriction allowedAuthorities={['canAccessDropApplication']} authorityKey="permissions">
        <Title level={TitleLevel.H3}>Component Validator</Title>
        <p>
          <Text>Drop Application (this is a restricted text and you should not see unless you have access)</Text>
        </p>
      </ComponentWithAuthorizationRestriction>

      <Title level={TitleLevel.H3}>Device Detect</Title>
      <p>
        <Text>{isMobile() ? 'This text appears when is MOBILE' : 'This text appears when is not MOBILE'}</Text>
      </p>
      <p>
        <Text>{isTablet() ? 'This text appears when is TABLET' : 'This text appears when is not TABLET'}</Text>
      </p>
      <p>
        <Text>{isDesktop() ? 'This text appears when is DESKTOP' : 'This text appears when is not DESKTOP'}</Text>
      </p>

      <Title level={TitleLevel.H3}>Browser Detect</Title>
      <p>
        <Text>{isChrome() ? 'This Text is rendered only for CHROME' : 'This Text is rendered only when is NOT CHROME'}</Text>
      </p>
      <p>
        <Text>{isIE() ? 'This Text is rendered only for IE' : 'This Text is rendered only when is NOT IE'}</Text>
      </p>

      <Title level={TitleLevel.H3}>Lazy Loading + Pagination + Edition (Formik and Yup)</Title>
      <br />
      <TodoListPaginatedItems />
    </CenteredContent>
  );
};

export default TodoList;
