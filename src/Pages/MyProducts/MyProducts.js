import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const { data: myAdvertisements } = useQuery({
    queryKey: ['my-advertisements'],
    queryFn: () =>
      fetch(`http://localhost:5000/my-advertisements?email=${user.email}`, {
        method: 'GET',
        headers: { authorization: `bearer ${localStorage.getItem('carToken')}` },
      }).then((res) => res.json()),
  });
  console.log(myAdvertisements);

  return (
    <div className='overflow-x-auto p-10'>
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
                  {myAdvertisement.advertise === false ? (
                    <button className='btn btn-primary btn-sm text-xs'>Advertise</button>
                  ) : null}
                  <button className='btn btn-primary btn-sm text-xs'>Delete</button>
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
