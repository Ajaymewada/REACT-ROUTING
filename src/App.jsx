import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Ordersummary from './Components/Ordersummary';
import Nomatch from './Components/Nomatch';
import Products from './Components/Products';
import Feature from './Components/Feature';
import New from './Components/New';
import CustomizedProducts from './Components/CustomizedProducts';
import Users from './Components/Users';
import UserDetails from './Components/UserDetails';
import Admin from './Components/Admin';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<Ordersummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<Feature />} />
          <Route path='featured' element={<Feature />} />
          <Route path='new' element={<New />} />
          <Route path="custom" element={<CustomizedProducts />} />
        </Route>
        <Route path="users" element={<Users />}></Route>
        <Route path="users/:userId" element={<UserDetails />} />
        <Route path="*" element={<Nomatch />} />
      </Routes>
    </>
  )
}

export default App
