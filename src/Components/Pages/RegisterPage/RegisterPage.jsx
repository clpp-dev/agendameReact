import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { postCreateUser } from "../../Services/services";

export const RegisterPage = () => {
  
  const { register, handleSubmit, watch ,formState : { errors } } = useForm();
  
  const onSubmitRegister = async (data) => {
    alert(data)
    const payloadRegisterNewUser = {
      username: data.username,
      nombre: data.name,
      apellidos: data.lastName,
      edad: data.age,
      ocupacion: data.job,
      email: data.email,
      password: data.password,
    }
    const responseCreateUser= await postCreateUser(payloadRegisterNewUser);
    console.log('🚀 > > > > onSubmit > > > > responseCreateUser', responseCreateUser);
  };

  return (
    <div
      className="container-fluid row pt-0 m-0 justify-content-center align-items-center vh-100 shadow pt-2 pb-1 mt-0 mb-0 rounded"
      style={{backgroundColor: "#5405ef"}}
    >
      <div className="col-xl-7 justify-content-lg-center mt-0 mb-0 pb-1 bg-gradient-primary rounded">
        <h2 className="h2 text-center mb-3 fw-bold text-light">Regístrate Ahora</h2>

        <form onSubmit={handleSubmit(onSubmitRegister)} className="fw-bold">
          <div className="form-floating mb-3">
            <input
              type='text'
              id='floatingInput'
              placeholder='Nombres'
              className='form-control fw-bold'
              {...register('name', {
                required: true,
                minLength: 3,
              })}
            />
            <label htmlFor="floatingInput">Nombre*</label>
          </div>

          <div className="form-floating mb-3">
          <input
              type='text'
              id='floatingInput'
              placeholder='Apellidos'
              className='form-control fw-bold'
              {...register('lastName', {
                required: true,
                minLength: 3,
              })}
            />
            <label htmlFor="floatingInput">Apellido*</label>
          </div>

          <div className="form-floating mb-3">
          <input
              type='number'
              id='floatingInput'
              placeholder='Edad'
              className='form-control fw-bold'
              {...register('age', {
                required: true,
                minLength: 3,
              })}
            />
            <label htmlFor="floatingInput">Edad*</label>
          </div>

          <div className="form-floating mb-3">
          <input
              type='text'
              id='floatingInput'
              placeholder='Ocupacion'
              className='form-control fw-bold'
              {...register('job', {
                required: true,
                minLength: 3,
              })}
            />
            <label htmlFor="floatingInput">Ocupación*</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              id="floatingInput"
              placeholder="email"
              className="form-control fw-bold"
              {...register("email",{
                required: true,
                min: 50,
                max: 100,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
              })}
            />

            {errors.email?.type === "required" &&
            <small className="fail text-white">No puede estar el campo vacio </small>}
            {errors.email?.type === "maxLength" &&
            <small className="fail text-white">No puede escribir más de 100 caracteres</small>}
            {errors.email?.type === "pattern" &&
            <small className="fail text-white">Digite una dirección de e-mail válida</small>}

            <label htmlFor="floatingInput">E-mail*</label>
          </div>

          <div className="form-floating">
            <input
              type="text"
              name="password"
              className="form-control fw-bold"
              id="floatingPassword"
              placeholder="Password"
              {...register("passwordRegister",{
                required: true,
                min: 8,
                max: 50,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
              })}
            />
            {errors.password?.type === "required" &&
            <small className="fail text-white">No puede estar el campo vacio </small>}
            {errors.password?.type === "maxLength" &&
            <small className="fail text-white">No puede escribir más de 50 caracteres</small>}
            {errors.password?.type === "pattern" &&
            <small className="fail text-white text-center">La contraseña debe se de minimo 8 caracteres y contener minimo:<br/> 1 mayúscula, 1 miúscula y 1 número</small>}

            <label htmlFor="floatingPassword">Contraseña*</label>
          </div>

          <div className="d-grid">
            <button
              type='submit '
              className="btn btn-primary mt-2 pt-2 pb-2 fs-5 fw-bold rounded-pill"
            >
              Registrarse
            </button>
          </div>

          <p className="text-center link-light p-3">
            <NavLink to="/" className="text-center align-center h5 link-light">Volver al Inicio</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};
