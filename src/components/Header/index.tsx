import { useHistory } from "react-router-dom";
import HeaderAuth from "./HeaderAuth";
import HeaderGuest from "./HeaderGuest";

const Header: React.FC = () => {
  const history = useHistory();
  return (
    <div className="header row">
      <div className="header-logo col-6" onClick={() => history.push("/")}>
        Funny Movies
      </div>
      <div className="header-user-info col-6">
        <HeaderGuest />
        {/* <HeaderAuth username="Mane" /> */}
      </div>
    </div>
  );
};

export default Header;
