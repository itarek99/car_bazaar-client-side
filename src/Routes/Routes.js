import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layouts/DashboardLayout';
import MainLayout from '../Layouts/MainLayout';
import AddProduct from '../Pages/AddProduct/AddProduct';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import MyProducts from '../Pages/MyProducts/MyProducts';
import ProductsByCategory from '../Pages/ProductsByCategory/ProductsByCategory';
import Register from '../Pages/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import SellerRoute from './SellerRoute/SellerRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      {
        path: '/category/:id',
        element: (
          <PrivateRoute>
            <ProductsByCategory />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: 'add-product',
        element: (
          <SellerRoute>
            <AddProduct />
          </SellerRoute>
        ),
      },
      {
        path: 'my-products',
        element: (
          <SellerRoute>
            <MyProducts />
          </SellerRoute>
        ),
      },
    ],
  },
]);

export default router;
