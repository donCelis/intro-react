import { useState } from "react";

const Contador = () => {
  const [cuenta, cambiarCuenta] = useState(0);

  const aumentar = (cantidad) => cambiarCuenta(cuenta + cantidad);
  const disminuir = (cantidad) => cambiarCuenta(cuenta - cantidad);

  return (
    <section className="py-4">
      <div className="container">
        <p>Contador: {cuenta}</p>
        <button onClick={() => aumentar(10)} className="btn btn-success me-3">
          +
        </button>
        <button onClick={() => disminuir(5)} className="btn btn-danger">
          -
        </button>
      </div>
    </section>
  );
};

export default Contador;
