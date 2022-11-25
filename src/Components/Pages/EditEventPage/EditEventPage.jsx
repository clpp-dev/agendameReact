import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useGetOneEvent from '../../Hooks/useGetOneEvent';
import { putEditEvent } from '../../Services/services';

export const EditEventPage = () => {
  const { id } = useParams();

  const responseSearchEvent = useGetOneEvent({ _id: id });
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const payloadUdateEvent = {
      description : data.description,
      hour: data.hour,
      date: data.date,
      place: data.place,
    }
    const responseUpdateEvent = await putEditEvent(id, payloadUdateEvent);
    console.log('🚀 > > > > onSubmit > > > > responseUpdateEvent', responseUpdateEvent);
  };


  if (responseSearchEvent.status === 200) {
    setValue('description', responseSearchEvent?.data?.description);
    setValue('hour', responseSearchEvent?.data?.hour);
    setValue('date', responseSearchEvent?.data?.date);
    setValue('place', responseSearchEvent?.data?.place);
  }

  const today = new Date();

  return (
    <div className='container-xl w-md-100 pt-2 d-flex justify-content-center align-items-center rounded'>
      <div className='col-xl-9 mt-5 d-flex align-content-center'>
        <form
          className='mt-6 p-5 mb-5 fw-bold w-100'
          style={{ backgroundColor: '#00000098', borderRadius: '15px' }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2
            className='text-center mb-3 text-light fw-bold'
            style={{ fontSize: '45px' }}
          >
            Editar evento
          </h2>
          <div className='form-floating mb-3'>

            <input
              type='text'
              id='floatingInput'
              placeholder='Descripción'
              className='form-control fw-bold'
              {...register('description', {
                required: true,
                minLength: 3,
              })}
            />

            <label htmlFor='floatingInput'>Descripción</label>
          </div>
          <div className='form-floating mb-3'>

            <input
              type='time'
              id='floatingInput'
              placeholder='Hora'
              className='form-control fw-bold'
              {...register('hour', {
                required: true,
              })}
            />

            <label htmlFor='floatingInput'>Hora</label>
          </div>
          <div className='form-floating mb-3'>

            <input
              type='date'
              id='floatingInput'
              placeholder='Fecha'
              className='form-control fw-bold'
              min={today}
              {...register('date', {
                required: true,
              })}
            />

            <label htmlFor='floatingInput '>Fecha</label>
          </div>
          <div className='form-floating mb-3'>

            <input
              type='text'
              id='floatingInput'
              placeholder='Lugar'
              className='form-control fw-bold'
              {...register('place', {
                required: true,
                minLength: 3,
              })}
            />

            <label htmlFor='floatingInput '>Lugar</label>
          </div>
          <div className='d-grid'>
            <button
              type='submit'
              className='btn btn-primary m-2 p-2 mt-2 pt-2 pb-2 text-light fw-bold fs-4'
              style={{ backgroundColor: '#5405EF', borderColor: '#fff' }}
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
