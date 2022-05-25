import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Page/Blogs/Blogs';
import Home from './Page/Home/Home/Home';
import Login from './Page/Login/Login';
import SignUp from './Page/Login/SignUp';
import Footer from './Page/Shared/Footer/Footer';
import Navbar from './Page/Shared/Navbar/Navbar';

function App() {
  return (
    <div >
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='blogs' element={<Blogs></Blogs>}></Route>
      <Route path='login' element={<Login></Login>}></Route>
      <Route path="signup" element={<SignUp></SignUp>} />
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
