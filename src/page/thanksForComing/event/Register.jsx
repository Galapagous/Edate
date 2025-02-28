// import { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useForm, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
// // import { registerForEvent } from './data';

// // Validation schema using Yup
// const validationSchema = Yup.object({
//   username: Yup.string()
//     .min(3, 'Username must be at least 3 characters')
//     .required('Username is required'),
//   secretPasscode: Yup.string()
//     .min(6, 'Passcode must be at least 6 characters')
//     .required('Secret passcode is required'),
//   image: Yup.mixed()
//     .required('Please upload an image')
//     .test('fileSize', 'File size too large (max 5MB)', (value) => {
//       return value && value.size <= 5 * 1024 * 1024; // 5MB limit
//     })
//     .test('fileType', 'Only JPEG or PNG images are allowed', (value) => {
//       return value && ['image/jpeg', 'image/png'].includes(value.type);
//     }),
// });

// const RegisterForEvent = () => {
//   const { userId, eventId } = useParams();
//   const navigate = useNavigate();
//   const [previewImage, setPreviewImage] = useState(null);

//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors, isSubmitting },
//     reset,
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//     defaultValues: {
//       username: '',
//       secretPasscode: '',
//       image: null,
//     },
//   });

//   const onSubmit = async (data) => {
//     try {
//       // Prepare form data for submission
//       const formData = new FormData();
//       formData.append('username', data.username);
//       formData.append('secretPasscode', data.secretPasscode);
//       formData.append('image', data.image);

//       alert('Registration successful!');
//       reset();
//       setPreviewImage(null);
//       navigate(`/dashboard/${userId}/event`);
//     } catch (error) {
//       console.error('Registration error:', error);
//       alert('Failed to register. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
//       <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6">
//         <h1 className="text-2xl font-semibold text-gray-900 mb-6">Register for Event</h1>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           {/* Username Field */}
//           <div>
//             <label
//               htmlFor="username"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Username
//             </label>
//             <input
//               {...register('username')}
//               type="text"
//               id="username"
//               className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                 errors.username ? 'border-red-500' : ''
//               }`}
//               placeholder="Enter your nickname"
//             />
//             {errors.username && (
//               <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
//             )}
//           </div>

//           {/* Secret Passcode Field */}
//           <div>
//             <label
//               htmlFor="secretPasscode"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Secret Passcode
//             </label>
//             <input
//               {...register('secretPasscode')}
//               type="password"
//               id="secretPasscode"
//               className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                 errors.secretPasscode ? 'border-red-500' : ''
//               }`}
//               placeholder="Enter the secret phrase"
//             />
//             {errors.secretPasscode && (
//               <p className="text-red-500 text-sm mt-1">{errors.secretPasscode.message}</p>
//             )}
//           </div>

//           {/* Image Upload Field */}
//           <div>
//             <label
//               htmlFor="image"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Upload Your Image
//             </label>
//             <Controller
//               name="image"
//               control={control}
//               render={({ field }) => (
//                 <input
//                   type="file"
//                   id="image"
//                   accept="image/jpeg,image/png"
//                   onChange={(e) => {
//                     const file = e.target.files[0];
//                     field.onChange(file);
//                     setPreviewImage(file ? URL.createObjectURL(file) : null);
//                   }}
//                   className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                     errors.image ? 'border-red-500' : ''
//                   }`}
//                 />
//               )}
//             />
//             {errors.image && (
//               <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
//             )}
//             {previewImage && (
//               <img
//                 src={previewImage}
//                 alt="Preview"
//                 className="mt-4 w-32 h-32 object-cover rounded-md shadow-sm"
//               />
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
//           >
//             {isSubmitting ? 'Registering...' : 'Register'}
//           </button>
//         </form>

//         {/* Back Button */}
//         <button
//           onClick={() => navigate(`/dashboard/${userId}/event`)}
//           className="mt-4 w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
//         >
//           Back to Events
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RegisterForEvent;

// ------ version 2 --------
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// import { registerForEvent } from './data';

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .required('Username is required'),
  secretPasscode: Yup.string()
    .min(6, 'Passcode must be at least 6 characters')
    .required('Secret passcode is required'),
  image: Yup.mixed()
    .required('Please upload an image')
    .test('fileSize', 'File size too large (max 5MB)', (value) => {
      return value && value.size <= 5 * 1024 * 1024;
    })
    .test('fileType', 'Only JPEG or PNG images are allowed', (value) => {
      return value && ['image/jpeg', 'image/png'].includes(value.type);
    }),
});

const RegisterForEvent = ({ setShowModal }) => {
  const { userId, eventId } = useParams();
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      username: '',
      secretPasscode: '',
      image: null,
    },
  });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('username', data.username);
      formData.append('secretPasscode', data.secretPasscode);
      formData.append('image', data.image);

    //   await registerForEvent(userId, eventId, formData);

      alert('Registration successful!');
      reset();
      setPreviewImage(null);
      setShowModal(false); // Close modal on success
      navigate(`/dashboard/${userId}/event`);
    } catch (error) {
      console.error('Registration error:', error);
      alert('Failed to register. Please try again.');
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Register for Event</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Username Field */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Username
          </label>
          <input
            {...register('username')}
            type="text"
            id="username"
            className={`w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors.username ? 'border-red-500 focus:ring-red-500' : ''
            }`}
            placeholder="Enter your username"
          />
          {errors.username && (
            <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>
          )}
        </div>

        {/* Secret Passcode Field */}
        <div>
          <label
            htmlFor="secretPasscode"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Secret Passcode
          </label>
          <input
            {...register('secretPasscode')}
            type="password"
            id="secretPasscode"
            className={`w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors.secretPasscode ? 'border-red-500 focus:ring-red-500' : ''
            }`}
            placeholder="Enter your secret phrase"
          />
          {errors.secretPasscode && (
            <p className="mt-1 text-sm text-red-600">{errors.secretPasscode.message}</p>
          )}
        </div>

        {/* Image Upload Field */}
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Upload Your Image
          </label>
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <input
                type="file"
                id="image"
                accept="image/jpeg,image/png"
                onChange={(e) => {
                  const file = e.target.files[0];
                  field.onChange(file);
                  setPreviewImage(file ? URL.createObjectURL(file) : null);
                }}
                className={`w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  errors.image ? 'border-red-500 focus:ring-red-500' : ''
                }`}
              />
            )}
          />
          {errors.image && (
            <p className="mt-1 text-sm text-red-600">{errors.image.message}</p>
          )}
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              className="mt-3 w-24 h-24 object-cover rounded-md shadow-sm border border-gray-200"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegisterForEvent;