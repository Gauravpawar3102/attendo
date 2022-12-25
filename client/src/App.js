import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormInputPage from './pages/FormInputPage';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import ClassDetails from './pages/ClassDetails';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter client={client}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<FormInputPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/classdetails" element={<ClassDetails />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
