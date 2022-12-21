import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormInputPage from './pages/FormInputPage';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import ClassDetails from './pages/ClassDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<FormInputPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/classdetails" element={<ClassDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
