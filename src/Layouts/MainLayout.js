import { Outlet } from 'react-router-dom';
import Navbar from '../Navigation/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default MainLayout;
