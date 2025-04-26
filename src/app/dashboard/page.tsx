import { auth, currentUser } from '@clerk/nextjs/server';
import React from 'react';

const DashboardPage = async () => {
  const authObj = await auth();
  const userObj = await currentUser();

  console.log('authObj', authObj);
  console.log('userObj', userObj);

  return <h1>DashboardPage</h1>;
};

export default DashboardPage;
