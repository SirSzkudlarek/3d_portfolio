import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="neon-gradient_text">DS</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'text-neon_blue-300' : 'text-white hover:text-neon_blue-300')}
        >
          Doświadczenie
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? 'text-neon_blue-300' : 'text-white hover:text-neon_blue-300')}
        >
          Projekty
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
