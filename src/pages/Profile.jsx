import { getAuth, updateProfile } from 'firebase/auth';
import { updateDoc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

/*const Profile = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth();
  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return user ? <h1>{user.displayName}</h1> : 'Not Logged In';
};*/

const Profile = () => {
  const auth = getAuth();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate('/');
  };

  return (
    <div className='profile'>
      <header className='profileHeader'>
        <p className='pageHeader'>My Profile</p>
        <button className='logOut' onClick={onLogout}>
          Logout
        </button>
      </header>

      <main>
        <div className='profileDetailsHeader'>
          <p className='profileDetailsText'>Personal Details</p>
          <p className='changePersonalDetails'>
            {changeDetails ? 'done' : 'change'}
          </p>
        </div>
      </main>
    </div>
  );
};

export default Profile;
