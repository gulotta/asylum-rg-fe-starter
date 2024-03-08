import React from 'react';

import LoginButton from '../components/common/login-button';
import LogoutButton from '../components/common/logout-button';

import { useAuth0 } from '@auth0/auth0-react';

export const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};
