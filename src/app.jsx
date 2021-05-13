import { useState } from "react";
import Container from "./components/container";
import Card from "./components/card";
import { data } from "./data";

const App = () => {
  const [session, setSession] = useState(false);

  return (
    <Container classProp={session ? "" : "bg-primary text-white py-4"}>
      {session ? (
        <div className="row py-5 gy-4">
          {data.map((element, id) => (
            <Card col="col-md-6 col-lg-3" key={id} {...element} />
          ))}
          <button onClick={() => setSession(false)} className="btn btn-info">
            Cerrar Sesión
          </button>
        </div>
      ) : (
        <div className="text-center">
          <p>No hay sesión activa</p>
          <button onClick={() => setSession(true)} className="btn btn-info">
            Iniciar Sesión
          </button>
        </div>
      )}
    </Container>
  );
};

export default App;
