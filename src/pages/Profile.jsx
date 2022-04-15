import { getAuth } from 'firebase/auth';
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
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

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
    </div>
  );
};

export default Profile;
