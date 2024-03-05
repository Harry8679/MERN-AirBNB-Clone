import './App.css';
import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage.jsx';

const App = () => {

  return (
    <Routes>
      <Route index element={<IndexPage />} />
    </Routes>
  )
}

export default App
