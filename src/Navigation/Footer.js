const Footer = () => {
  return (
    <div className='bg-gray-100 text-base-content'>
      <footer className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 container mx-auto px-2'>
        <div>
          <div className=''>
            <h3 className='text-2xl font-bold mb-2'>CAR BAZAAR</h3>
            <p>carbazaar.com is the leading search car venture in Bangladesh, that helps users buy and sell cars.</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='footer-title'>Services</span>
          <a href='/' className='link link-hover'>
            Buy Car
          </a>
          <a href='/' className='link link-hover'>
            Sell Car
          </a>
          <a href='/' className='link link-hover'>
            Compare Car
          </a>
        </div>
        <div className='flex flex-col'>
          <span className='footer-title'>About</span>
          <a href='/' className='link link-hover'>
            About us
          </a>
          <a href='/' className='link link-hover'>
            Contact Us
          </a>
          <a href='/' className='link link-hover'>
            Privacy Policy
          </a>
        </div>
        <div className='flex flex-col'>
          <span className='footer-title'>More</span>
          <a href='/' className='link link-hover'>
            Job Offer
          </a>
          <a href='/' className='link link-hover'>
            News and Reviews
          </a>
          <a href='/' className='link link-hover'>
            Cookie policy
          </a>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
