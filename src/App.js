
import './App.css';
import { Navbar } from './components/navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Shop} from "./pages/shop/shop";
import {Cart} from "./pages/cart/cart";
import {Initialpage} from "./initialpage";
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <ShopContextProvider>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Initialpage/>}  />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </Router>
    </ShopContextProvider>
    
    
  );
}

export default App;
