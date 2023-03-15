import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ApolloProvider } from '@apollo/client';
import { Authenticator } from '@aws-amplify/ui-react';
import { API, GraphQLResult } from '@aws-amplify/api';
import { Auth } from 'aws-amplify';

import { ListRecipesQuery } from './API';
import './App.css';
// import Nav from './components/nav';

import RequireAuth from './components/RequireAuth';
import Login from './components/pages/login';
import Home from './components/pages/home';
import CreateRecipe from './components/pages/createRecipe';

import Layout from './components/layout';

import { client } from './graphql/client';
import { listRecipes } from './graphql/queries';
import { SET_RECIPES, useAppContext } from './state';


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
  const { dispatch } = useAppContext();

  // const navigate = useNavigate();

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

    const getData = async () => {
      // Getting the Data from AWS - IAM unauth way
      const recipesData = await API.graphql({
      query: listRecipes,
      authMode: 'AWS_IAM'
    }) as GraphQLResult<ListRecipesQuery>;

    const data = recipesData?.data?.listRecipes?.items

    // setting data in store
    dispatch({
        type: SET_RECIPES,
        recipes: data,
    });
  }

  useEffect(() => {
    getData()
  }, []);

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
