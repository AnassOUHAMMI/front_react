import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Accueil from './pages/Accueil';
import Title from './components/Title';
import Panier from './pages/Panier';
import Products from './pages/Products';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route index element={<Title />}/>
        <Route path="/Accueil" element={<Accueil/>}></Route>
        <Route path="/Panier" element={<Panier/>}></Route>
        <Route path="/Products" element={<Products/>}></Route>


      </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
