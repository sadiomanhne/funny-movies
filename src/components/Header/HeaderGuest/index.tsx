const HeaderGuest: React.FC = ({ children }) => {
  const handleLogin = () => {};
  return (
    <div className="row">
      <div className="col">
        <input type="text" className="form-control" placeholder="username" />
      </div>
      <div className="col">
        <input type="text" className="form-control" placeholder="password" />
      </div>
      <div className="col">
        <button className="btn btn-primary" onClick={handleLogin}>
          Login/Register
        </button>
      </div>
    </div>
  );
};

export default HeaderGuest;
