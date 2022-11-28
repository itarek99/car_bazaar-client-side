import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loader from '../../components/Loader/Loader';

const AllBuyers = () => {
  const { data: allBuyers, refetch } = useQuery({
    queryKey: ['all-buyers'],
    queryFn: () =>
      fetch(`http://localhost:5000/all-buyers`, {
        headers: { authorization: `bearer ${localStorage.getItem('carToken')}` },
      }).then((res) => res.json()),
  });

  const handleDeleteBuyer = (id) => {
    fetch(`http://localhost:5000/all-buyers/${id}`, {
      method: 'DELETE',
      headers: { authorization: `bearer ${localStorage.getItem('carToken')}` },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged) {
          toast.success('Buyer Deleted');
          refetch();
        }
      });
  };

  if (!allBuyers) return <Loader />;

  return (
    <div className='p-10'>
      <h3 className='font-bold text-2xl mb-4'>My Buyers</h3>
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
            {allBuyers?.map((buyer, i) => (
              <tr key={buyer._id}>
                <th>{i + 1}</th>
                <td className='w-full'>
                  <div>
                    <p className='font-bold text-lg'>{buyer.name}</p>
                    <p className='text-sm'>{buyer.email}</p>
                  </div>
                </td>

                <td className='text-center'>
                  <div className='flex gap-4'>
                    <button
                      onClick={() => handleDeleteBuyer(buyer._id)}
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
export default AllBuyers;
