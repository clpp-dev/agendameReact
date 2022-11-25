import { useEffect, useState } from 'react';
import { getOneEvent } from '../Services/services';

const useGetOneEvent = ({ _id }) => {
  console.log('🚀 > > > > useGetOneEvent > > > > _id', _id);
  const [event, setEvent] = useState({});

  const getOneEventEdit = async () => {
    try {
      const response = await getOneEvent({
        _id: _id,
      });

      setEvent(() => response);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOneEventEdit();
  }, []);

  return event;
};

export default useGetOneEvent;
