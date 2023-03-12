// components/Layout.js
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthenticator, Button, View } from '@aws-amplify/ui-react';

const Layout = () => {
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  const navigate = useNavigate();

  function logOut() {
    signOut();
    navigate('/login');
  }
  return (
    <>
      <nav className="font-lato">
        <Button onClick={() => navigate('/')}>Home</Button>
        <Button onClick={() => navigate('/create-recipe')}>
          Add Recipe
        </Button>

        {route !== 'authenticated' ? (
          <Button onClick={() => navigate('/login')}>Login</Button>
        ) : (
          <Button onClick={() => logOut()}>Logout</Button>
        )}
      </nav>
      <h1 className="font-lato text-4xl">Recipe App Version 2</h1>
      <View>
        {route === 'authenticated' ? '' : 'Please Login!'}
      </View>

      <Outlet />
    </>
  );
}

export default Layout;