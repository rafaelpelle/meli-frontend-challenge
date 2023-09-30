import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { NavHeader } from './components';
import { HomePage, ProductDetails, SearchResults } from './pages';

function App() {
  return (
    <BrowserRouter>
      <NavHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/items" element={<SearchResults />} />
        <Route path="/items/:id" element={<ProductDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
