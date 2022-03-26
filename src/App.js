import { Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/ErrorPage';
import SearchPage from './components/SearchPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SearchPage />} />
        <Route path="*" element={<ErrorPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
