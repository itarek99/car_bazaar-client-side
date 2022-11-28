import AdvertisedProduct from './Components/AdvertisedProduct';
import Hero from './Components/Hero';
import NewsLetter from './Components/NewsLetter';
import ProductCategory from './Components/ProductCategory';

const Home = () => {
  return (
    <section>
      <Hero />
      <AdvertisedProduct />
      <ProductCategory />
      <NewsLetter />
    </section>
  );
};
export default Home;
