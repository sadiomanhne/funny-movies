import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import { auth, logout } from "../../../firebase";

const HeaderAuth: React.FC = () => {
  const [user] = useAuthState(auth);
  const history = useHistory();
  const handleLogout = () => {
    logout();
    history.push("/");
  };
  return (
    <div className="header-auth">
      <div>
        <span className="mr-8">Welcome</span>
        <strong>{user?.email}</strong>
      </div>
      <div>
        <Link to="/share">
          <button className="btn btn-primary">Share a movie</button>
        </Link>
      </div>
      <div>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default HeaderAuth;
