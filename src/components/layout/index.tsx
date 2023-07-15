// components/Layout.js
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthenticator, Button } from '@aws-amplify/ui-react';

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
      <nav className="mt-2 flex justify-center font-lato">
        <Button onClick={() => navigate('/')}>Home</Button>
        {route === 'authenticated' && (
          <Button onClick={() => navigate('/create-recipe')}>
            Add Recipe
          </Button>
        )}

        {route !== 'authenticated' ? (
          <Button onClick={() => navigate('/login')}>Login</Button>
        ) : (
          <Button onClick={() => logOut()}>Logout</Button>
        )}
      </nav>
      {/* <View>
        <p className="text-center">
          {route === 'authenticated' ? '' : 'You are not Logged in'}
        </p>
      </View> */}
      <h1 className="font-lato text-center text-4xl my-5">The Recipe Repository</h1>
    

      <Outlet />
    </>
  );
}

export default Layout;