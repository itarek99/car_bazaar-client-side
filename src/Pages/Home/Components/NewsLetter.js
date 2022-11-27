import { FaPaperPlane } from 'react-icons/fa';

const NewsLetter = () => {
  return (
    <section className='bg-primary'>
      <div className='container mx-auto px-2 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto items-center'>
          <h3 className='text-3xl font-bold text-white text-center md:text-left mb-4 md:mb-0'>
            Subscribe To Our <br /> Weekly Newsletter
          </h3>
          <div className='flex items-center gap-4'>
            <input type='email' placeholder='your@email.com' className='grow input input-bordered' />
            <button className='btn'>
              <FaPaperPlane className='text-primary text-xl' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewsLetter;
