import React from 'react';

import AuthLayout from '../components/layout/AuthLayout';
import LoginForm from '../components/Auth/LoginForm';
import { Card, CardContent } from '@/components/ui/card';

/**
 * The main application page, which serves as the login screen.
 * It utilizes AuthLayout for centering and presents the LoginForm within a Card component,
 * matching the design of a simple, modern authentication interface.
 */
const IndexPage: React.FC = () => {
  return (
    <AuthLayout>
      <Card className="w-96 shadow-lg rounded-lg border-0">
        <CardContent className="p-8">
          <LoginForm />
        </CardContent>
      </Card>
    </AuthLayout>
  );
};

export default IndexPage;
