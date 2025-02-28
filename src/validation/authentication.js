import * as yup from 'yup'

export const registerSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
    phoneNumber: yup.string().required("Phone number is required"),
    countryNumber: yup.string().required("country code is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
      confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')  // Ensure confirmPassword matches password
      .required("Confirm Password is required"),
  });

  export const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
})

