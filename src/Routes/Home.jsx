import React, {useEffect} from 'react';
import { useAppContext} from "../Components/utils/global.context";
import Card from '../Components/Card';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch} = useAppContext();

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: "SET_DATA", playload: data});
        });
  }, [dispatch]);

  return (
    <main>
    <h1>Home</h1>
    <div className={state.theme === "dark" ? "dark-theme" : "light-theme"}>
      {state.data.map((dentist) => (
        <Card key={dentist.id} dentist={dentist} />
      ))}
    </div>
  </main>
  );
};

export default Home;