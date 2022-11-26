const Footer = () => {
  return (
    <footer className='footer gap-y-4 footer-center p-10 bg-base-200 text-base-content rounded'>
      <div className='grid grid-flow-col gap-4'>
        <a href='/' className='link link-hover'>
          About us
        </a>
        <a href='/' className='link link-hover'>
          Contact
        </a>
        <a href='/' className='link link-hover'>
          Jobs
        </a>
        <a href='/' className='link link-hover'>
          Press kit
        </a>
      </div>

      <div>
        <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
      </div>
    </footer>
  );
};
export default Footer;
