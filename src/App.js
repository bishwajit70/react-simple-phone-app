
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contacts/Contact';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Products from './components/Products/Products';

export const ProductsContext = createContext()

function App() {

  const [products, setProducts] = useState([])

  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      <div className="App">
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Products></Products>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
          <Route path='/slug/:slug' element={<ProductDetail></ProductDetail>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </ProductsContext.Provider>

  );
}

export default App;
