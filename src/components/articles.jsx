import { data } from "../data";
import Card from "../components/card";

const Articles = ({ setState }) => {
  return (
    <div className="row py-5 gy-4">
      {data.map((element, id) => (
        <Card col="col-md-6 col-lg-3" key={id} {...element} />
      ))}
      <button onClick={() => setState(false)} className="btn btn-success">
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Articles;
