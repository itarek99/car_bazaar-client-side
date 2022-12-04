import { FaPaperPlane } from 'react-icons/fa';

const NewsLetter = () => {
  return (
    <section className='bg-primary'>
      <div className='container mx-auto px-2 py-16'>
        <div className='mx-auto grid max-w-5xl grid-cols-1 items-center lg:grid-cols-3'>
          <h3 className='mb-4 text-center text-3xl font-bold text-white lg:mb-0 lg:text-left'>
            Subscribe To Our <br /> Weekly Newsletter
          </h3>
          <div className='col-span-2 flex flex-col items-center gap-4 md:flex-row'>
            <input type='text' placeholder='Full Name' className='input-bordered input w-full ' />
            <input type='email' placeholder='your@email.com' className='input-bordered input w-full ' />
            <button className='btn w-28 lg:w-auto'>
              <FaPaperPlane className='text-xl text-primary' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewsLetter;
