import { useState } from "react";
import Container from "./components/container";
import Card from "./components/card";
import { data } from "./data";
import LoginForm from "./components/login";

const App = () => {
  const [session, setSession] = useState(true);

  return (
    <Container classProp={"py-4"}>
      {session ? (
        //Convertir en componente
        <div className="row py-5 gy-4">
          {data.map((element, id) => (
            <Card col="col-md-6 col-lg-3" key={id} {...element} />
          ))}
          <button onClick={() => setSession(false)} className="btn btn-success">
            Cerrar Sesión
          </button>
        </div>
        //Convertir en componente
      ) : (
        <LoginForm setState={setSession} />
      )}
    </Container>
  );
};

export default App;
