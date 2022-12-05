const Footer = () => {
  return (
    <div className='bg-gray-100 text-base-content'>
      <footer className='container mx-auto grid grid-cols-1 gap-6 p-10 px-2 md:grid-cols-2 lg:grid-cols-4'>
        <div className='md:col-span-2'>
          <div className=''>
            <h3 className='mb-2 text-2xl font-bold'>CAR BAZAAR</h3>
            <p className='pr-40'>
              carbazaar.com is the leading search car venture in Bangladesh, that helps users buy and sell cars.
            </p>
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='footer-title'>Services</span>
          <a href='/' className='link-hover link mb-1 text-sm'>
            Buy Car
          </a>
          <a href='/' className='link-hover link mb-1 text-sm'>
            Sell Car
          </a>
          <a href='/' className='link-hover link mb-1 text-sm'>
            Compare Car
          </a>
          <a href='/' className='link-hover link mb-1 text-sm'>
            News and Reviews
          </a>
        </div>
        <div className='flex flex-col'>
          <span className='footer-title'>About</span>
          <a href='/' className='link-hover link mb-1 text-sm'>
            About us
          </a>
          <a href='/' className='link-hover link mb-1 text-sm'>
            Contact Us
          </a>
          <a href='/' className='link-hover link mb-1 text-sm'>
            Privacy Policy
          </a>
          <a href='/' className='link-hover link mb-1 text-sm'>
            Cookie policy
          </a>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
