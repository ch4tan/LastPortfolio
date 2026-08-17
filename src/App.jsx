import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import Navbar from './layouts/Navbar.jsx';
import Home from './pages/Home.jsx';
import Skills from './pages/Skills.jsx';
import Xp from './pages/Xp.jsx';
import Footer from './layouts/Footer.jsx';

function App() {
  return (
    <div className="flex flex-col items-center h-full w-full bg-white font-merriweather lg:bg-neutral-950 lg:bg-none bg-[url('/me4.PNG')] bg-no-repeat bg-cover">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Competences"} element={<Skills />} />
          <Route path={"/Projets"} element={<Xp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;