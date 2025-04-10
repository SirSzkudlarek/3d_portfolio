import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinkColor = (isActive, isHome) => {
    return isHome
      ? isActive
        ? 'text-neon_blue-300'
        : 'text-white hover:text-neon_blue-300'
      : isActive
      ? 'text-neon_blue-300'
      : 'text-black hover:text-neon_blue-300';
  };
  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="neon-gradient_text">DS</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({ isActive }) => navLinkColor(isActive, isHome)}>
          Doświadczenie
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => navLinkColor(isActive, isHome)}>
          Projekty
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
