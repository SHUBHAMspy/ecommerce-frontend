import Cart from './pages/cart/cart';
import Home from './pages/Home';
import Login from './pages/login/Login';
import Product from './pages/productPage/Product';
import ProductByCategory from './pages/productsByCategory/ProductByCategory';
import ProductsPage from './pages/productsPage/ProductsPage';
import SignUp from './pages/signUp/SignUp';

const routes = [
  {path:"/", element: <Home/>},
  {path:"/login",element:<Login />},
  {path:"/signup",element:<SignUp />},
  {path:"/product/:id",element:<Product />},
  {path:"/products",element:<ProductsPage />},
  {path:"/category/:id",element:<ProductByCategory />},
  {path:"/cart",element:<Cart />},

]

export default routes