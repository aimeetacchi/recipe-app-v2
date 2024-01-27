import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client';
import { Authenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import './App.css';
import RequireAuth from './components/RequireAuth';
import Login from './components/pages/login';
import Home from './components/pages/home';
import CreateRecipe from './components/pages/createRecipe';
import Layout from './components/layout';
import { client } from './graphql/client';

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/create-recipe"
            element={
              <RequireAuth>
                <CreateRecipe />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const App = () => {;
    Auth.currentAuthenticatedUser({
      // Optional, By default is false. If set to true, 
      // this call will send a request to Cognito to get the latest user data
      bypassCache: false
    })
      .then((user: any) => {
        // console.log(user)
      })
      .catch((err: any) => {
        console.log(err) 
    });

  return (
      <ApolloProvider client={client}>
        <div className="app-boilerplate">
            <Authenticator.Provider>
              <MyRoutes/>
            </Authenticator.Provider>
        </div>
      </ApolloProvider>
  );
}

export default App;
