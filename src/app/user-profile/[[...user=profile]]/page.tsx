import { UserProfile } from '@clerk/nextjs';
import React from 'react';

const UserProfilePage = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <UserProfile path="/user-profile" />
    </div>
  );
};

export default UserProfilePage;
