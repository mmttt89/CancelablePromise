
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import NextPage from "./views/next-page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/next-page' element={<NextPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
