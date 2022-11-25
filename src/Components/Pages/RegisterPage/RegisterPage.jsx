import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { postCreateUser } from '../../Services/services';
import Swal from 'sweetalert2';

export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [job, setJob] = useState('');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitRegister = async (data) => {
    const payloadRegisterNewUser = {
      nombre: name ? name : '',
      apellidos: lastName ? lastName : '',
      edad: age ? age : 0,
      ocupacion: job ? job : '',
      email: email ? email : '',
      password: password ? password : '',
    };

    try {
      const responseCreateUser = await postCreateUser(payloadRegisterNewUser);
      if (responseCreateUser?.status === 201) {
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'Usuario creado correctamente!',
        });
        return;
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Ups...!',
        text: 'Hubo un error inesperado, intente nuevamente.',
      });
    }
  };

  return (
    <div
      className='container-fluid row pt-0 m-0 justify-content-center align-items-center shadow pt-2 pb-1 mt-0 mb-0 rounded'
      style={{ backgroundColor: '#5405ef' }}
    >
      <div className='col-xl-7 justify-content-lg-center mt-0 mb-0 pb-1 bg-gradient-primary rounded'>
        <h2 className='h2 text-center mb-3 fw-bold text-light'>
          Regístrate Ahora
        </h2>

        <form onSubmit={handleSubmit(onSubmitRegister)} className='fw-bold'>
          <div className='form-floating mb-3'>
            <input
              type='text'
              name='name'
              id='floatingInput'
              placeholder='Nombres'
              className='form-control fw-bold'
              required
              value={name}
              onChange={(e) => setName(e?.target?.value)}
            />
            <label htmlFor='floatingInput'>Nombre*</label>
          </div>

          <div className='form-floating mb-3'>
            <input
              type='text'
              name='lastName'
              id='floatingInput'
              placeholder='Apellidos'
              className='form-control fw-bold'
              required
              value={lastName}
              onChange={(e) => setLastName(e?.target?.value)}
            />
            <label htmlFor='floatingInput'>Apellido*</label>
          </div>

          <div className='form-floating mb-3'>
            <input
              type='number'
              id='floatingInput'
              placeholder='Edad'
              className='form-control fw-bold'
              required
              value={age}
              onChange={(e) => setAge(e?.target?.value)}
            />
            <label htmlFor='floatingInput'>Edad*</label>
          </div>

          <div className='form-floating mb-3'>
            <input
              type='text'
              id='floatingInput'
              placeholder='Ocupacion'
              className='form-control fw-bold'
              required
              value={job}
              onChange={(e) => setJob(e?.target?.value)}
            />
            <label htmlFor='floatingInput'>Ocupación*</label>
          </div>

          <div className='form-floating mb-3'>
            <input
              type='email'
              name='email'
              id='floatingInput'
              placeholder='email'
              className='form-control fw-bold'
              value={email}
              onChange={(e) => setEmail(e?.target?.value)}
            />
            <label htmlFor='floatingInput'>E-mail*</label>
          </div>

          <div className='form-floating'>
            <input
              type='text'
              name='password'
              className='form-control fw-bold'
              id='floatingPassword'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e?.target?.value)}
            />
            <label htmlFor='floatingPassword'>Contraseña*</label>
          </div>

          <div className='d-grid'>
            <button
              type='submit '
              className='btn btn-primary mt-2 pt-2 pb-2 fs-5 fw-bold rounded-pill'
            >
              Registrarse
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
