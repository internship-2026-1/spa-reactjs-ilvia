import { useEffect, useState } from 'react';

function useFetchUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const mockUsers = [
      { id: 1, name: 'Ana Pérez', email: 'ana@example.com', role: 'Admin' },
      { id: 2, name: 'Luis García', email: 'luis@example.com', role: 'Editor' },
      { id: 3, name: 'Marta López', email: 'marta@example.com', role: 'Viewer' },
    ];

    setUsers(mockUsers);
  }, []);

  return users;
}

export default useFetchUsers;
