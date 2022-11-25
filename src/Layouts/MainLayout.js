import { Outlet } from 'react-router-dom';
import Footer from '../Navigation/Footer';
import Navbar from '../Navigation/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default MainLayout;
