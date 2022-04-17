import { Link, useNavigate, useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '../firebase.config';
import Spinner from '../components/Spinner';
import shareIcon from '../assets/svg/shareIcon.svg';
import { useState } from 'react';

const Listing = () => {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(null);
  const [shareLinkCopied, setShareLinkCopied] = useState(null);

  return <div>LISTING</div>;
};

export default Listing;
