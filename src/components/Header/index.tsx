import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import HeaderAuth from "./HeaderAuth";
import HeaderGuest from "./HeaderGuest";
import { auth } from "../../firebase";

const Header: React.FC = () => {
  const history = useHistory();
  const [user] = useAuthState(auth);

  return (
    <div className="header row">
      <div className="header-logo col-6" onClick={() => history.push("/")}>
        Funny Movies
      </div>
      <div className="header-user-info col-6">
        {user ? <HeaderAuth /> : <HeaderGuest />}
      </div>
    </div>
  );
};

export default Header;
