import React from 'react';
import Layout from '../components/layout';
import Roles from '../components/roles';
import Roleheader from '../components/role-header';

export default () => (
    <>
      <Layout>
        <Roleheader />
        <Roles />
      </Layout>
    </>
);
