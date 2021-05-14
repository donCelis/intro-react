import { useState } from "react";

const LoginForm = ({ setState }) => {
  const admin = {
    name: "root",
    pass: "holaMundo!",
  };

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const onChange = (event) => {
    let target = event.currentTarget;
    target.name === "user"
      ? setUser(target.value)
      : target.name === "pass" && setPass(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    user === admin.name && pass === admin.pass
      ? setState(true)
      : console.log("Los datos no son correctos");
  };

  return (
    <div className="row justify-content-center py-4">
      <div className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-4">
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label htmlFor="user" className="form-label">
              Usuario
            </label>
            <input
              type="text"
              id="user"
              name="user"
              className="form-control"
              required
              onChange={onChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pass" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              id="pass"
              name="pass"
              className="form-control"
              required
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
