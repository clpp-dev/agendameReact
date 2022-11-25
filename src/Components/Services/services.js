import { axiosInstance } from '../config/axios';

//GET
export const getAllUsers = async () => {
  const response = await axiosInstance.get('user');
  return response.data;
};

export const getUser = async ({ _id }) => {
  const response = await axiosInstance.get(`user/${_id}`);
  return response;
};


export const getAllEvents = async () => {
  const response = await axiosInstance.get('event');
  return response;
};

export const getOneEvent = async ({ _id }) => {
  console.log('🚀 > > > > getOneEvent > > > > _id', _id);
  const response = await axiosInstance.get(
    `event/${_id}`
  );
  return response;
};


export const deleteEssvent = async (id) => {
  const response = await axiosInstance.delete(
    `event/${id}`
  );
  console.log('🚀 > > > > deleteEvent > > > > response', response);
  return response;
};




export const getEventsByUser = async ({ idUser }) => {
  const response = await axiosInstance.get(`eventsUser/${idUser}`);
  return response;
};



// POST
export const postCreateUser = async (body) => {
  const response = await axiosInstance.post(
    'user',
    body
  );
  return response;
};

export const postCreateEvent = async (body) => {
  const response = await axiosInstance.post(
    'event',
    body
  );
  return response;
};



// PUT
export const putEditUser = async (body) => {
  const response = await axiosInstance.put(
    'user',
    body
  );
  return response;
};

export const putEditEvent = async (id, body) => {
  const response = await axiosInstance.put(
    `event/${id}`,
    body
  );
  return response;
};


//DELETE
export const deleteEvent = async (id) => {
  const response = await axiosInstance.delete(
    `event/${id}`
  );
  console.log('🚀 > > > > deleteEvent > > > > response', response);
  return response;
};