import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import rickAndMortyService from '../../services/rickAndMorty.service';

const Detail = () => {
  const [mascota, setMascota] = useState({});
  const { id } = useParams();
  const { pathname } = useLocation();
  

  useEffect(() => {
    console.log(pathname);
    rickAndMortyService.getCharacterById(id)
      .then((data) => setMascota(data))
  }, []);

  // Agregar una verificación para mostrar la imagen solo cuando los datos estén disponibles
  return (
    <div className="row m-3">
      <div className="col-md-12">
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
          <div className="card-body d-flex flex-column align-items-start">
            <strong className="d-inline-block mb-2 text-success">
              {mascota.species}
            </strong>
            <h3 className="mb-0 text-dark">{mascota.name}</h3>
            <div className="mb-1 text-muted">
              {new Date(mascota.created).toLocaleDateString()}
            </div>
            <div className="mb-1 text-muted"></div>
          
          <p className="card-text"><small className=""> Specie: {mascota.species}</small></p>
          <p className="card-text"><small className=""> Status: {mascota.status}</small></p>
          <p className="card-text"><small className=""> Gender: {mascota.gender}</small></p>
          <p className="card-text"><small className=""> Created: {mascota.created}</small></p>
            <button type="button" className="btn btn-sm btn-outline-secondary">
                <Link to={"/"} className="mt-3 btn btn-primary btn-lg">
              Volver
            </Link>
            </button>
             
            
          </div>

          {/* Mostrar la imagen solo cuando los datos estén disponibles */}
          {mascota.image && (
            <img
              className="h-100 d-inline-block rounded card-img-right flex-auto d-none d-md-block m-4"
              height="auto"
              src={mascota.image}
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
