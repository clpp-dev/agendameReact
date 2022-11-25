import React, { useState } from 'react';
import Lottie from 'lottie-react';
import LoginAnimation from '../../../Assets/Animations/LoginAstronaut.json';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { postloginUser } from '../../Services/services';

export const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    const payloadLogin = {
      email: email ? email : '' ,
      password: password ? password : '',
    };
    console.log('🚀 > > > > onSubmit > > > > payloadLogin', payloadLogin);
    // const responseUpdateEvent = await postloginUser(payloadLogin);
    // console.log('🚀 > > > > onSubmit > > > > responseUpdateEvent', responseUpdateEvent);
  };

  return (
    <div
      className='container-fluid row pt-0 m-0 justify-content-center align-items-center shadow pt-0 pb-1 mt-0 mb-0 rounded'
      style={{ backgroundColor: '#ad1086' }}
    >
      <div className='col-md-5 d-flex flex-column justify-content-center align-items-center mt-0 mb-0 pb-1 bg-gradient-primary rounded'>
        <div style={{ width: '90%', maxWidth: '400px' }}>
          <Lottie animationData={LoginAnimation} loop={true} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='fw-bold w-100'>
          <div className='form-floating mb-3'>
            <input
              type='email'
              name='email'
              className='form-control fw-bold'
              id='floatingInput'
              placeholder='E-mail'
              value={email}
              onChange={(e)=> setEmail(e?.target?.value)}
            />

            <label htmlFor='floatingInput'>E-mail*</label>
          </div>
          <div className='form-floating'>
            <input
              type='password'
              name='password'
              className='form-control fw-bold'
              id='floatingPassword'
              placeholder='Password'
              value={password}
              onChange={(e)=> setPassword(e?.target?.value)}
              
            />

            <label htmlFor='floatingPassword'>Contraseña*</label>
          </div>
          <div className='d-grid'>
            <button
              type='submit'
              className='btn btn-primary mt-2 pt-2 pb-2 fs-5 fw-bold rounded-pill'
              onClick={() => onSubmit()}
            >
              Iniciar sesión
            </button>
          </div>
          <p className='text-center link-light p-3'>
            <NavLink to='/' className='text-center align-center h5 link-light'>
              Volver al Inicio
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};
