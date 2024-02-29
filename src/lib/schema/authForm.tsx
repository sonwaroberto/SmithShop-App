import * as yup from 'yup';

const passwordRules =
  /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
// min 5 characters, 1 special character digit.
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .max(50, 'Username must be less than or equal to 50 characters')
    .required('Username is required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  phoneNumber: yup
    .string()
    .min(9, 'Phone number must be 9 digits long')
    .max(9, 'Phone number must be 9 digits long')
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .max(16, 'Password must be at most 16 characters long')
    .matches(passwordRules, {
      message:
        'Please create a stronger password. Must contain 8 characters, and one special character.',
    })
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});

const resetPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
});

export {loginSchema, registerSchema, resetPasswordSchema};
