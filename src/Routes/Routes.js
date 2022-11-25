import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layouts/DashboardLayout';
import MainLayout from '../Layouts/MainLayout';
import AddProduct from '../Pages/AddProduct/AddProduct';
import Home from '../Pages/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ path: '/', element: <Home /> }],
  },
  { path: '/dashboard', element: <DashboardLayout />, children: [{ path: 'add-product', element: <AddProduct /> }] },
]);

export default router;
