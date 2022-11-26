const AddProduct = () => {
  return (
    <div className='w-full max-w-3xl mx-auto px-2 mt-4'>
      <h3 className='text-xl font-bold mb-2'>Fill In The Details:</h3>
      <form className='bg-base-100'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>Car Brand</span>
            </label>
            <input type='text' placeholder='Brand Name' className='input input-bordered' />
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>Car Model</span>
            </label>
            <input type='text' placeholder='Model' className='input input-bordered' />
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>New Price</span>
            </label>
            <input type='number' placeholder='New Price' className='input input-bordered' />
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>Selling Price</span>
            </label>
            <input type='number' placeholder='Selling Price' className='input input-bordered' />
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>Condition</span>
            </label>
            <select className='select select-bordered'>
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>Year Of Purchase</span>
            </label>
            <input type='text' placeholder='Purchasing Year' className='input input-bordered' />
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>Phone Number</span>
            </label>
            <input type='text' placeholder='Phone Number' className='input input-bordered' />
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>Your Location</span>
            </label>
            <input type='text' placeholder='Location' className='input input-bordered' />
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>Category</span>
            </label>
            <select className='select select-bordered'>
              <option>Sedan</option>
              <option>Luxury</option>
              <option>Supercar</option>
            </select>
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Car's Photo</span>
            </label>
            <input type='file' className='file-input file-input-bordered' />
          </div>

          <div className='form-control lg:col-span-2'>
            <label className='label'>
              <span className='label-text'>Description</span>
            </label>
            <textarea className='textarea textarea-bordered h-36' placeholder='Description'></textarea>
          </div>
        </div>
        <div className='mt-6 text-right mb-8'>
          <input className='btn btn-primary text-white px-10' type='submit' value='Add Product' />
        </div>
      </form>
    </div>
  );
};
export default AddProduct;
