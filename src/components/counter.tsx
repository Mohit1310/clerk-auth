// create a counter component
'use client';
import { useAuth, useUser } from '@clerk/nextjs';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  //   const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) return null;

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
