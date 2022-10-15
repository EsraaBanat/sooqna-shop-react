import './App.css';
import Signup from './components/SignUp/Signup';
import Signin from './components/SignIn/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Product from './components/Product/CreateProductForm';
import MyProduct from './components/myProduct/myProducts';
import Wishlist from './components/Wishlist/Wishlist';
import MyCart from './components/Cart/Cart';
import { PrivateRoute } from './auth/privteRoutes';
import Contact from './components/Contact/Contact';
import NavBar from './components/NavBar/NavBar';
import UserInfo from './components/UserProfile/UserInfo';
import Setting from './components/UserProfile/Setting';
import UserPage from './components/UserPage/UserPage';
import UpdateProduct from './components/Product/UpdateProduct'
import ContextWrapper from './context/context';
import SingleProductPage from './components/Product/SingleProductPage';

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <ContextWrapper>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={< Home />} />
                        <Route path='/signup' element={< Signup />} />
                        <Route path='/signin' element={<Signin />} />
                        <Route path='/product' element={<PrivateRoute><Product /></PrivateRoute>} />
                        <Route path='/myproducts' element={<MyProduct />} />
                        <Route path='/mycart' element={<MyCart />} />
                        <Route path='/Wishlist' element={<Wishlist />} />
                        <Route path='/userinfo' element={<UserInfo />} />
                        <Route path='/setting' element={<Setting />} />
                        <Route path='/user' element={<UserPage />} />
                        <Route path='/viewdetails/:id' element={<SingleProductPage />} />
                        <Route path='/updateproduct' element={<UpdateProduct />} />
                    </Routes>
                    <Contact />
                </ContextWrapper>
            </BrowserRouter>
        </div>
    );
}

export default App;
