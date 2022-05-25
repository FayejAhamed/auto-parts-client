import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Page/Blogs/Blogs';
import Home from './Page/Home/Home/Home';
import Purchase from './Page/Home/Purchase/Purchase';
import Login from './Page/Login/Login';
import RequireAuth from './Page/Login/RequireAuth';
import SignUp from './Page/Login/SignUp';
import Footer from './Page/Shared/Footer/Footer';
import Navbar from './Page/Shared/Navbar/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/blogs' element={<RequireAuth><Blogs></Blogs></RequireAuth>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path="/signup" element={<SignUp></SignUp>} />
      <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
    </Routes>
    <Footer></Footer>
    <ToastContainer/>
    </div>
  );
}

export default App;
