import { Link, useLocation } from "react-router-dom";
import LogoPark from "../assets/img/Logo_aion.png";

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `uppercase tracking-widest text-sm font-medium transition-colors ${
      isActive(path)
        ? "text-cyan-400"
        : "text-white hover:text-cyan-300"
    }`;

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className=" backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-1">
          <div className="grid grid-cols-3 items-center h-24">
            <nav className="flex gap-5">
              <Link to="/" className={linkClass("/")}>
                Inicio
              </Link>
              <Link to="/nosotros" className={linkClass("/nosotros")}>
                Nosotros
              </Link>
            </nav>

            {/* Logo center */}
            <div className="flex justify-center">
              <Link to="/">
                <img
                  src={LogoPark}
                  alt="Logo"
                  className=" w-24 h-auto"
                />
              </Link>
            </div>

            {/* Right menu */}
            <nav className="flex menu1 gap-10">
              <Link to="/contacto" className={linkClass("/contacto")}>
                Contacto
              </Link>
            </nav>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
