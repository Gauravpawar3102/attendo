import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormInputPage from './pages/FormInputPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<FormInputPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
