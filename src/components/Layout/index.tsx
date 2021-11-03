import Header from "../Header";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="container">
      <div className="header-section">
        <Header />
      </div>
      {children}
    </div>
  );
};

export default Layout;
