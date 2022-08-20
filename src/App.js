import './App.css';
import { Routes, Route} from "react-router-dom";
import About from './Pages/About';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div>
     <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="*" element={<NotFound/>}/>

    </Routes>
    </div>
  );
}

export default App;
