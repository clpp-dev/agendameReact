import { useEffect, useState } from 'react';
import { getUser } from '../Services/services';

const useGetOneUser = ({ _id }) => {
  const [user, setUser] = useState({});

  const getOneUser = async () => {
    try {
      const response = await getUser({
        _id: _id,
      });

      setUser(() => response);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOneUser();
  }, []);

  return user;
};

export default useGetOneUser;
