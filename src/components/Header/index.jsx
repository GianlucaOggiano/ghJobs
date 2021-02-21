import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <NavLink to='/'>
          <h3 className='logo'>
            Github <span>Jobs</span>
          </h3>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
