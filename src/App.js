
import './App.css';
import { Navbar } from './components/navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Shop} from "./pages/shop/shop";
import {Cart} from "./pages/cart/cart";
import {Homepage} from "./homepage";
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <ShopContextProvider>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}  />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>

    </Router>
    </ShopContextProvider>
    
    
  );
}

export default App;
