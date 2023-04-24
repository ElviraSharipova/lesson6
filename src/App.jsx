
import './App.css';
import Header from './Header/Header';

import About from './About/About';
import Products from './Products/Products';
import Contacts from './Contacts/Contacts';
import Main from './Main/Main';




import {  Route, Routes } from 'react-router-dom'
function App() {
   
    return ( 
      <>   
      <Header/>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </>
      
    );
}
export default App;