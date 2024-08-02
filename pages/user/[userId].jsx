
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { fetchUsers } from '../../lib/users';

export default function UserDetail() {
  const router = useRouter();
  const { userId } = router.query;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      fetchUsers().then(data => {
        const userData = data.find(user => user.id === parseInt(userId));
        setUser(userData);
        setLoading(false);
      }).catch(error => {
        setLoading(false);
        console.error(error);
      });
    }
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Error: User not found</div>;
  }

  return (
    <div>
      <h2>{user.name.firstname} {user.name.lastname}</h2>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>Phone: {user.phone}</p>
      <button onClick={() => router.back()}>Back</button>
    </div>
  );
}