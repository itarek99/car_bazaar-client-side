import { FaPaperPlane } from 'react-icons/fa';

const NewsLetter = () => {
  return (
    <section className='bg-primary'>
      <div className='container mx-auto px-2 py-16'>
        <div className='flex max-w-3xl mx-auto justify-between items-center'>
          <h3 className='text-2xl font-bold text-white'>Subscribe To Our Newsletter</h3>
          <div className='flex items-center gap-4'>
            <input
              type='email'
              placeholder='your@email.com'
              className='shrink-0 input input-bordered w-full max-w-lg'
            />
            <button className='btn'>
              <FaPaperPlane className='text-primary text-lg' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewsLetter;
