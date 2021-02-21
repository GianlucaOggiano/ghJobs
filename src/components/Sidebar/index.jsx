import SidebarLocation from '../SidebarLocation';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='fullTime'>
        <input type='checkbox' name='full-time' />
        <label htmlFor='full-time'>Full Time</label>
      </div>
      <SidebarLocation />
    </div>
  );
};

export default Sidebar;
