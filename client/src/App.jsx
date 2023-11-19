import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from './pages/todo';
import Navbar from './components/navbar';
import Home from './pages/home';
import Group from './pages/group';

function App() {
  return (
    <BrowserRouter>
      <Routes>        
        <Route path="*" element={<Navbar />}>
          <Route path="todo" element={<Todo />} />
          <Route index element={<Home />} />
          <Route path="group" index element={<Group />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
