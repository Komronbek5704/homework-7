
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchUsers } from '../lib/users';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then(data => {
      setUsers(data);
      setLoading(false);
    }).catch(error => {
      setLoading(false);
      console.error(error);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Link href={`/user/${user.id}`}>
            {user.name.firstname} {user.name.lastname}
          </Link>
        </li>
      ))}
    </ul>
  );
}