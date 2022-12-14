import { createBrowserRouter } from 'react-router-dom';
import ErrorElement from '../components/ErrorElement/ErrorElement';
import DashboardLayout from '../Layouts/DashboardLayout';
import MainLayout from '../Layouts/MainLayout';
import AddProduct from '../Pages/AddProduct/AddProduct';
import AllBuyers from '../Pages/AllByers/AllBuyers';
import AllSeller from '../Pages/AllSeller/AllSeller';
import Blog from '../Pages/Blog/Blog';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import MyOrders from '../Pages/MyOrders/MyOrders';
import MyProducts from '../Pages/MyProducts/MyProducts';
import NotFoundRoute from '../Pages/NotFoundRoute/NotFoundRoute';
import ProductsByCategory from '../Pages/ProductsByCategory/ProductsByCategory';
import Register from '../Pages/Register/Register';
import AdminRoute from './AdminRoute/AdminRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import SellerRoute from './SellerRoute/SellerRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorElement />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/blog', element: <Blog /> },
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
      {
        path: 'all-sellers',
        element: (
          <AdminRoute>
            <AllSeller />
          </AdminRoute>
        ),
      },
      {
        path: 'all-buyers',
        element: (
          <AdminRoute>
            <AllBuyers />
          </AdminRoute>
        ),
      },
      {
        path: 'my-orders',
        element: <MyOrders />,
      },
    ],
  },

  { path: '*', element: <NotFoundRoute /> },
]);

export default router;
