
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//components
import Store from './components/Store';
import ProductDetail from './components/ProductDetail';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';
//context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';
import DarkModeContext from './context/DarkModeContext';





function App() {
  
  return (
  <DarkModeContext>
    <ProductContextProvider>
      <CartContextProvider>
       
        
          <BrowserRouter>
          
            <Navbar />
            <Routes>
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/products" element={<Store />} />
              <Route path='/cart' element={<ShopCart />} />
              <Route path="*" element={<Navigate to="/products" />} />
            </Routes>
            
          </BrowserRouter>
        
        
      </CartContextProvider>
    </ProductContextProvider>
    </DarkModeContext>

  );
}

export default App;
