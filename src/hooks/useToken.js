import { useEffect, useState } from 'react';

const useToken = (email) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    if (email) {
      fetch(`https://car-bazar-server-seven.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((result) => {
          if (result.accessToken) {
            localStorage.setItem('carToken', result.accessToken);
            setToken(result.accessToken);
          }
        });
    }
  }, [email]);
  return [token];
};

export default useToken;
