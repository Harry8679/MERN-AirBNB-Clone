import './App.css';
import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Layout from './components/Layout.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4080';
// axios.defaults.withCredentials = true;

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
    </Routes>
  )
}

export default App
