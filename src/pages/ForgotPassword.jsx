import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const onChange = (e) => {};

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Forgot Password</h1>
    </div>
  );
};

export default ForgotPassword;
