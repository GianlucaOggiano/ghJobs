import { useState } from 'react';
import { BiWorld } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { SET_LOCATION } from '../../redux/types';

const SidebarLocation = () => {
  const { location } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [searchLocation, setSearchLocation] = useState('');

  const radioChangeHandler = (e) => {
    console.log(e.target.value);
    const newLocation = e.target.value;
    dispatch({
      type: SET_LOCATION,
      payload: newLocation,
    });
    setSearchLocation('');
  };

  const searchLocationHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: SET_LOCATION,
      payload: searchLocation,
    });
  };

  return (
    <div className='sidebar-location'>
      <h4>Location</h4>
      <form className='location' onSubmit={searchLocationHandler}>
        <BiWorld />
        <input
          type='text'
          placeholder='City, state, zip code or country'
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
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
