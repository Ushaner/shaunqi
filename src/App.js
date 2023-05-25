import './App.css';
import Charatoo from './Armory/CharactyPagy';
import Comida from './Armory/Comida';
import Everythrungy from './Armory/Everythrungy';
import RippyOffy from './Armory/Rippyoffy';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path="/" element={<RippyOffy />} />
          <Route path="/Charapoo" element={<Charatoo />} /> 
          <Route path="/Comida" element={<Comida />} />
          <Route path="/Everything" element={<Everythrungy />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
