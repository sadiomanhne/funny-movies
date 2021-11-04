import { Link } from "react-router-dom";

interface IHeaderAuth {
  username: string;
}
const HeaderAuth: React.FC<IHeaderAuth> = ({ username }) => {
  return (
    <div className="header-auth">
      <div>
        <span className="mr-8">Welcome</span>
        <span>{username}</span>
      </div>
      <div>
        <Link to="/share">
          <button className="btn btn-primary">Share a movie</button>
        </Link>
      </div>
      <div>
        <button className="btn btn-danger">Logout</button>
      </div>
    </div>
  );
};

export default HeaderAuth;
