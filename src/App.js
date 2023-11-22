
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import E1 from "./E1"
function App() {
  return (
<BrowserRouter>
 <Routes>
  <Route path="/" element={<E1 />}></Route>
 </Routes>
</BrowserRouter>
  );
}

export default App;
