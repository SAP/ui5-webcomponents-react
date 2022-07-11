import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { isDesktop, isTablet, isPhone } from '@ui5/webcomponents-base/dist/Device.js';

import { Link, Text, Title, TitleLevel } from '@ui5/webcomponents-react';
import ComponentWithAuthorizationRestriction from '../../../auth/ComponentWithAuthorizationRestriction';
import CenteredContent from '../../../components/Layout/CenteredContent';
import TodoListPaginatedItems from './TodoListPaginatedItems';
import { ROUTES } from '../../../routes/Routes';

const TodoList = () => {
  const navigate = useNavigate();

  return (
    <CenteredContent>
      <Helmet title="List - TodoList App" />
      <Title level={TitleLevel.H1}>Todo List</Title>
      <br />

      <Title level={TitleLevel.H3}>Routing</Title>
      <br />
      <Link onClick={() => navigate('/dontexist')}>Test NotFound Page</Link>
      <br />
      <Link onClick={() => navigate(ROUTES.BUGGY)}>Test Error Page</Link>
      <br />
      <br />
      <ComponentWithAuthorizationRestriction
        allowedAuthorities={['canAccessDropApplication']}
        authorityKey="permissions"
      >
        <Title level={TitleLevel.H3}>Component Validator</Title>
        <p>
          <Text>Drop Application (this is a restricted text and you should not see unless you have access)</Text>
        </p>
      </ComponentWithAuthorizationRestriction>

      <Title level={TitleLevel.H3}>Device Detect</Title>
      <p>
        <Text>{isPhone() ? 'This text appears when is PHONE' : 'This text appears when is not PHONE'}</Text>
      </p>
      <p>
        <Text>{isTablet() ? 'This text appears when is TABLET' : 'This text appears when is not TABLET'}</Text>
      </p>
      <p>
        <Text>{isDesktop() ? 'This text appears when is DESKTOP' : 'This text appears when is not DESKTOP'}</Text>
      </p>

      <Title level={TitleLevel.H3}>Lazy Loading + Pagination + Edition (Formik and Yup)</Title>
      <br />
      <TodoListPaginatedItems />
    </CenteredContent>
  );
};

export default TodoList;
