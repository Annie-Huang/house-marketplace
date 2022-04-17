import { useParams, useSearchParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import { useState } from 'react';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [landlord, setLandlord] = useState(null);

  // https://reactrouter.com/docs/en/v6/api#usesearchparams
  const [searchParam, setSearchParams] = useSearchParams();

  const params = useParams();

  return <div>Contact</div>;
};

export default Contact;
