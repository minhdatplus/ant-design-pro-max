import { Button, Result } from 'antd';
import React from 'react';
import router from 'umi/router'; // This should use ant's 404 result component.
// But it hasn't been released yet, let's start with a simple one.

const NoFoundPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary" onClick={() => router.push('/')}>
        Back Home
      </Button>
    }
  />
);

export default NoFoundPage;
