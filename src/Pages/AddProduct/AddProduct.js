import axios from 'axios';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const AddProduct = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const imgBBKey = process.env.REACT_APP_IMGBB_API_KEY;
  const navigate = useNavigate();

  const handleAddProduct = (productInfo) => {
    setIsSubmitting(true);
    const image = productInfo.photo[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imgBBKey}`;

    fetch(url, { method: 'POST', body: formData })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const productInfoWithPhotoURl = {
            ...productInfo,
            photo: result.data.url,
            advertiser_name: user.displayName,
            advertiser_email: user.email,
            status: 'available',
            advertise: false,
            posted_time: new Date().getTime(),
          };

          axios
            .post('http://localhost:5000/cars', productInfoWithPhotoURl)
            .then((response) => {
              if (response.data.acknowledged) {
                toast.success('New Product Added!');
                reset();
                setIsSubmitting(false);
                navigate('/dashboard/my-products');
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
  };

  return (
    <div className='w-full max-w-3xl mx-auto px-2 mt-4'>
      <h3 className='text-xl font-bold mb-2'>Fill In The Details:</h3>
      <form onSubmit={handleSubmit(handleAddProduct)} className='bg-base-100'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>Car Brand</span>
            </label>
            <input
              {...register('brand', { required: 'true' })}
              type='text'
              placeholder='Brand Name'
              className='input input-bordered'
            />
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>Car Model</span>
            </label>
            <input
              {...register('model', { required: 'true' })}
              type='text'
              placeholder='Model'
              className='input input-bordered'
            />
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>New Price</span>
            </label>
            <input
              {...register('new_price', { required: 'true' })}
              type='number'
              placeholder='New Price'
              className='input input-bordered'
            />
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>Selling Price</span>
            </label>
            <input
              {...register('selling_price', { required: 'true' })}
              type='number'
              placeholder='Selling Price'
              className='input input-bordered'
            />
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>Condition</span>
            </label>
            <select {...register('condition', { required: 'true' })} className='select select-bordered'>
              <option value='excellent'>Excellent</option>
              <option value='good'>Good</option>
              <option value='fair'>Fair</option>
            </select>
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>Year Of Purchase</span>
            </label>
            <input
              {...register('purchasing_year', { required: 'true' })}
              type='text'
              placeholder='Purchasing Year'
              className='input input-bordered'
            />
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>Phone Number</span>
            </label>
            <input
              {...register('phone', { required: 'true' })}
              type='text'
              placeholder='Phone Number'
              className='input input-bordered'
            />
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>Your Location</span>
            </label>
            <input
              {...register('location', { required: 'true' })}
              type='text'
              placeholder='Location'
              className='input input-bordered'
            />
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>Category</span>
            </label>
            <select {...register('category', { required: 'true' })} className='select select-bordered'>
              <option value='sedan'>Sedan</option>
              <option value='luxury'>Luxury</option>
              <option value='supercar'>Supercar</option>
            </select>
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Car's Photo</span>
            </label>
            <input
              {...register('photo', { required: 'true' })}
              type='file'
              accept='image/*'
              className='file-input file-input-bordered'
            />
          </div>

          <div className='form-control lg:col-span-2'>
            <label className='label'>
              <span className='label-text'>Description</span>
            </label>
            <textarea
              {...register('description', { required: 'true' })}
              className='textarea textarea-bordered h-36'
              placeholder='Description'
            ></textarea>
          </div>
        </div>
        <div className='mt-6 text-right mb-8'>
          <input
            disabled={isSubmitting}
            className='btn btn-primary text-white px-10'
            type='submit'
            value='Add Product'
          />
        </div>
      </form>
    </div>
  );
};
export default AddProduct;
