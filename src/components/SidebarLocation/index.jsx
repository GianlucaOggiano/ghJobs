import { useContext } from 'react';
import { BiWorld } from 'react-icons/bi';
import { GlobalContext } from '../../context/GlobalContext';

const SidebarLocation = () => {
  const {
    state: { location },
  } = useContext(GlobalContext);

  const radioChangeHandler = (e) => {};

  return (
    <div className='sidebar-location'>
      <h4>Location</h4>
      <form className='location'>
        <BiWorld />
        <input type='text' placeholder='City, state, zip code or country' />
      </form>
      <form className='location-choice'>
        <div className='radio'>
          <input
            type='radio'
            name='location'
            value='newyork'
            checked={location === 'newyork'}
            onChange={radioChangeHandler}
          />
          <label htmlFor='radio'>New York</label>
        </div>
        <div className='radio'>
          <input
            type='radio'
            name='location'
            value='berlin'
            checked={location === 'berlin'}
            onChange={radioChangeHandler}
          />
          <label htmlFor='radio'>Berlin</label>
        </div>
        <div className='radio'>
          <input
            type='radio'
            name='location'
            value='london'
            checked={location === 'london'}
            onChange={radioChangeHandler}
          />
          <label htmlFor='radio'>London</label>
        </div>
      </form>
    </div>
  );
};

export default SidebarLocation;
