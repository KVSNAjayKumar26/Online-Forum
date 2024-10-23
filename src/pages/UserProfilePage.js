
import React from 'react'
import { useParams } from 'react-router-dom';
import { usersData } from '../services/authService';
import UserProfile from '../components/UserProfile';

const UserProfilePage = () => {
    const {id } = useParams();
    const user = usersData.find(user => user.id === id);
  return (
    <div style={{ padding: '20px' }}>
        <UserProfile user={user} />
    </div>
  );
};

export default UserProfilePage;