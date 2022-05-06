import React from 'react'

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import ProductDetail from './components/ProductDetail';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './components/Cart';
import Checkout from './components/Checkout'





const App=()=> {
 return(
    <div>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/products' element={<Product />}/>
    <Route path='/products/:id' element={<ProductDetail />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path='/about' element={<About />}/>
    <Route path='/contact' element={<Contact />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}


export default App;