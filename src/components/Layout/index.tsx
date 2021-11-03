import Header from "../Header";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
