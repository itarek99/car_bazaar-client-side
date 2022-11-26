import { useParams } from 'react-router-dom';

const ProductsByCategory = () => {
  let { id } = useParams();
  console.log(id);

  return <div className='container mx-auto px-2'>ProductsByCategory</div>;
};
export default ProductsByCategory;
