import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import Loader from '../../components/Loader/Loader';
import { AuthContext } from '../../context/AuthProvider';

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const { data: myAdvertisements, refetch } = useQuery({
    queryKey: ['my-advertisements'],
    queryFn: () =>
      fetch(`https://car-bazar-server-seven.vercel.app/my-advertisements?email=${user.email}`, {
        method: 'GET',
        headers: { authorization: `bearer ${localStorage.getItem('carToken')}` },
      }).then((res) => res.json()),
  });

  const handleAdvertise = (id) => {
    fetch(`https://car-bazar-server-seven.vercel.app/advertisements/${id}`, { method: 'PATCH' })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          toast.success('Product Advertised!');
          refetch();
        }
      });
  };

  const handleDelete = (id) => {
    fetch(`https://car-bazar-server-seven.vercel.app/advertisements/${id}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          toast.success('Product Deleted!');
          refetch();
        }
      });
  };

  if (!myAdvertisements) return <Loader />;

  if (myAdvertisements.length < 1)
    return (
      <div>
        <h3 className='p-10 text-lg'>Your Advertised Items Will Appear Here!</h3>
      </div>
    );

  return (
    <div className='overflow-x-auto '>
      <table className='table w-full'>
        <thead>
          <tr>
            <th></th>
            <th>Model</th>
            <th className='text-center'>Price</th>
            <th className='text-center'>Status</th>
            <th className='text-center'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {myAdvertisements?.map((myAdvertisement) => (
            <tr key={myAdvertisement._id}>
              <th>1</th>
              <td className='w-full'>
                <div>
                  <p className='text-xl font-bold'>{myAdvertisement.model}</p>
                  <p className='text-sm'>{myAdvertisement.brand}</p>
                </div>
              </td>
              <td>{myAdvertisement.selling_price}</td>
              <td className='capitalize'>{myAdvertisement.status}</td>
              <td>
                <div className='flex gap-3'>
                  {myAdvertisement.advertise === false && myAdvertisement.status === 'available' ? (
                    <button
                      onClick={() => handleAdvertise(myAdvertisement._id)}
                      className='btn btn-primary btn-sm text-xs text-white'
                    >
                      Advertise
                    </button>
                  ) : null}
                  <button
                    onClick={() => handleDelete(myAdvertisement._id)}
                    className='btn btn-primary btn-sm text-xs text-white'
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default MyProducts;
