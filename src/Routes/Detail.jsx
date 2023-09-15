import React , { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {id} = useParams();
  const [ dentist, setDentist] = useState(null);

  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setDentist(data);
        });
  }, [id]);

  if (!dentist) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h1>Detail Dentist id </h1>
      <div>
        <h2>{dentist.name}</h2>
        <p>Email: {dentist.email}</p>
        <p>Telefono: {dentist.phone}</p>
        <p>Sitio Web: {dentist.website}</p>
      </div>
      
    </>
  );
};

export default Detail;