import './App.css';
import { Routes, Route} from "react-router-dom";
import About from './Pages/About';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
     <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
    </Routes>
    </div>
  );
}

export default App;
