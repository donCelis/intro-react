

const LoginForm = () => {
  return (
    <div className="row justify-content-center py-4">
      <div className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-4">
        <form>
          <div className="mb-4">
            <label htmlFor="user" className="form-label">
              Usuario
            </label>
            <input type="text" name="user" className="form-control" required />
          </div>
          <div className="mb-4">
            <label htmlFor="pass" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              name="pass"
              className="form-control"
              required
            />
          </div>
          <button type="button" className="btn btn-success w-100">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
