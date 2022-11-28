import { useQuery } from '@tanstack/react-query';
import Loader from '../../components/Loader/Loader';

const MyOrders = () => {
  const { data: myOrders } = useQuery({
    queryKey: ['my-orders'],
    queryFn: () =>
      fetch(`http://localhost:5000/my-orders`, {
        headers: { authorization: `bearer ${localStorage.getItem('carToken')}` },
      }).then((res) => res.json()),
  });

  console.log(myOrders);

  if (!myOrders) return <Loader />;
  if (myOrders.length < 1) return <p>Please Order Something!</p>;

  return (
    <div className='p-10'>
      <h3 className='font-bold text-2xl mb-4'>My Orders</h3>
      <div className='overflow-x-auto '>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th className='text-center px-16'>Price</th>
              <th className='text-center'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((myOrder, i) => (
              <tr key={myOrder._id}>
                <th>{i + 1}</th>
                <td className='w-full'>
                  <div>
                    <p className='font-bold text-lg'>{myOrder.productName}</p>
                    <p className='text-sm'>{myOrder.meetingLocation}</p>
                  </div>
                </td>
                <td className='text-center'>
                  <p>{myOrder.productPrice}</p>
                </td>
                <td className='text-center'>
                  <div className='flex gap-4'>
                    <button className='btn btn-primary btn-sm text-white text-xs'>Pay</button>
                    <button className='btn btn-primary btn-sm text-white text-xs'>Remove</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MyOrders;
