import { Link, useLocation } from "react-router-dom";
import LogoPark from "../assets/img/Logo_aion.png";

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `uppercase tracking-widest text-sm font-medium transition-colors ${
      isActive(path)
        ? "text-cyan-400"
        : "text-cyan-400 hover:text-cyan-700"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 items-center h-28">

            {/* Left menu */}
            <nav className="flex justify-center">
              <Link to="/nosotros" className={linkClass("/nosotros")}>
                Nosotros
              </Link>
            </nav>

            {/* Logo */}
            <div className="flex justify-center">
              <Link to="/">
                <img
                  src={LogoPark}
                  alt="Logo"
                  className="w-32 h-auto"
                />
              </Link>
            </div>

            {/* Right menu */}
            <nav className="flex justify-center">
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