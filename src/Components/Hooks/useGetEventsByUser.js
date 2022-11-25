import { useEffect, useState } from 'react';
import { getEventsByUser } from '../Services/services';

const useGetEventsByUser = ({ idUser }) => {
  const [listEvents, setListEvents] = useState([]);

  const getListEvents = async () => {
    try {
      const response = await getEventsByUser({
        idUser: idUser,
      });

      setListEvents(() => response);
      const clg = await response;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getListEvents();
  }, []);

  return listEvents;
};

export default useGetEventsByUser;
