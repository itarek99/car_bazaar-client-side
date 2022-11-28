const Hero = () => {
  const heroBG = {
    backgroundImage: `url("https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
  };

  return (
    <div className='hero min-h-[92vh]' style={heroBG}>
      <div className='hero-overlay bg-black bg-opacity-40'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='width-full text-white'>
          <h1 className='mb-5 text-3xl lg:text-6xl font-bold'>WELCOME TO CAR BAZAAR</h1>
          <p className='mb-5 max-w-lg mx-auto'>
            carbazaar.com is the leading search car venture in Bangladesh, that helps users buy cars that are right for
            them.
          </p>
          <button className='btn btn-primary text-white'>Get Started</button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
