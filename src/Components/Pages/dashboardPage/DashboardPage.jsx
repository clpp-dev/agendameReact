import React from 'react';
import Lottie from 'lottie-react';
import editAnimation from '../../../Assets/Animations/edit.json';
import deleteAnimation from '../../../Assets/Animations/delete.json';
import searchAnimation from '../../../Assets/Animations/search.json';
import useGetEventsByUser from '../../Hooks/useGetEventsByUser';
import useGetOneUser from '../../Hooks/useGetOneUser';
import { deleteEvent } from '../../Services/services';
import { Link } from 'react-router-dom';

export const DashboardPage = () => {
  const idTemp = '637a5989b47e78340dece462';

  const idTempEvent = '63803af0ce61148914f09716';

  const responseEventsByUser = useGetEventsByUser({idUser: idTemp})
  
  const responseUserInSesion = useGetOneUser({_id: idTemp})

  const responseDELETE = deleteEvent(idTempEvent)

  return (
    <div className='d-flex justify-content-center'>
      <div
        className='container-md ms-0 me-0 row mt-md-5 mb-5 mt-0 pb-3'
        style={{ backgroundColor: '#00000098', borderRadius: '15px' }}
      >
        <div className='col-xl-12 pt-2'>
          <h2 className='h2 text-center pt-2 pb-2 text-light mb-0 rounded fw-bold'>
            Próximos Eventos
          </h2>

          <table className='table mt-0 table-dark table-striped table-hover table-bordered table-fluid bg-white align-middle table-md rounded'>
            <thead
              className='container-fluid text-light fw-bold text-center'
              style={{ backgroundColor: '#0d6efd' }}
            >
              <tr>
                <td>DETALLE</td>
                <td>HORA</td>
                <td>FECHA</td>
                <td>LUGAR</td>
                <td>OPCIONES</td>
              </tr>
            </thead>
            <br />
            <tbody className='container-fluid text-center h6'>
            {
              responseEventsByUser?.data?.map((item)=>(
                <tr key={item._id}>
                <td>{item.description}</td>
                <td>{item.hour}</td>
                <td>{item.date}</td>
                <td className=''>{item.place}</td>
                <td className='row container-fluid m-0 p-0'>
                  <Link
                    to={`/editevent/${item._id}`}
                    className='col btn btn-primary d-sm-grid mb-1 m-1 fw-bold d-flex flex-column justify-content-center'
                  >
                    <div
                      className='d-flex justify-content-center'
                      style={{ width: '30px', height: '30px' }}
                    >
                      <Lottie animationData={editAnimation} loop={true} />
                    </div>
                    Editar
                  </Link>

                  <a
                    className='col btn btn-danger d-sm-grid mb-1 m-1 fw-bold d-flex flex-column justify-content-center'
                    onClick={() =>{
                      console.log(`Eliminado! item de id: ${item._id}` );
                      deleteEvent(item._id)
                    }
                    }
                  >
                    <div
                      className='d-flex justify-content-center'
                      style={{ width: '30px', height: '30px' }}
                    >
                      <Lottie animationData={deleteAnimation} loop={true} />
                    </div>
                    Eliminar
                  </a>
                </td>
              </tr>
              ))
            }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
