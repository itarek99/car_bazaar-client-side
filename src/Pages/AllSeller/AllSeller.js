import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const AllSeller = () => {
  const { data: allSellers, refetch } = useQuery({
    queryKey: ['all-sellers'],
    queryFn: () =>
      fetch(`https://car-bazar-server-seven.vercel.app/all-sellers`, {
        headers: { authorization: `bearer ${localStorage.getItem('carToken')}` },
      }).then((res) => res.json()),
  });

  const handleDeleteSeller = (id) => {
    fetch(`https://car-bazar-server-seven.vercel.app/all-sellers/${id}`, {
      method: 'DELETE',
      headers: { authorization: `bearer ${localStorage.getItem('carToken')}` },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged) {
          toast.success('Seller Deleted');
          refetch();
        }
      });
  };

  if (!allSellers) return;

  return (
    <div className='p-10'>
      <h3 className='font-bold text-2xl mb-4'>My Sellers</h3>
      <div className='overflow-x-auto '>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th className='text-center'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allSellers?.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td className='w-full'>
                  <div>
                    <p className='font-bold text-lg'>{seller.name}</p>
                    <p className='text-sm'>{seller.email}</p>
                  </div>
                </td>

                <td className='text-center'>
                  <div className='flex gap-4'>
                    <button className='btn btn-primary btn-sm text-white text-xs'>Verify</button>
                    <button
                      onClick={() => handleDeleteSeller(seller._id)}
                      className='btn btn-primary btn-sm text-white text-xs'
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
    </div>
  );
};
export default AllSeller;
