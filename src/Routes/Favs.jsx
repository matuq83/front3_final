import React from "react";
import { useAppContext} from "../Components/utils/global.context";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useAppContext();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={ state.theme === "dark" ? "dark-theme" : "light-theme"}>
        {state.favorites.map((dentist) => (
        <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </>
  );
};

export default Favs;
