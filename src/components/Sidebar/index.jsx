import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_FULL_TIME } from '../../redux/types';
import SidebarLocation from '../SidebarLocation';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { fullTime } = useSelector((state) => state);

  const fullTimeHandler = (e) => {
    dispatch({
      type: SET_FULL_TIME,
      payload: e.target.checked,
    });
  };

  return (
    <div className='sidebar'>
      <div className='fullTime'>
        <input
          type='checkbox'
          name='full-time'
          checked={fullTime === true}
          onChange={fullTimeHandler}
        />
        <label htmlFor='full-time'>Full Time</label>
      </div>
      <SidebarLocation />
    </div>
  );
};

export default Sidebar;
