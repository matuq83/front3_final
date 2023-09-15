import React from "react";
import { useAppContext } from "../Components/utils/global.context";


const Card = ({ dentist}) => {
  const { dispatch } = useAppContext();

  const addFavorites = ()=>{
    dispatch({ type: "ADD_TO_FAVORITIES", payload: dentist});
  };

  return (
    <div className="card">
      <h2>{dentist.name}</h2>
      <p>Usuario: {dentist.username}</p>
      <button onClick={addFavorites} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
