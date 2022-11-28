import { useEffect, useState } from 'react';

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://car-bazar-server-seven.vercel.app/users/admin/${email}`)
        .then((res) => res.json())
        .then((result) => {
          setIsAdmin(result.isAdmin);
          setIsAdminLoading(false);
        });
    }
  }, [email]);

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
