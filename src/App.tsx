import { ApolloProvider } from '@apollo/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css';

import Nav from './components/nav'
import Home from './components/pages/home';
import { client } from './graphql/client';


const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <div className="app-boilerplate">
        <Nav />
          <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
