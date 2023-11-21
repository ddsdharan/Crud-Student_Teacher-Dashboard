import React, { useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import SpeedIcon from '@mui/icons-material/Speed';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';


import 'bootstrap/dist/css/bootstrap.css';

const menuItems = [
  { name: 'Home', to: '/', icon: <HomeIcon/> },
  { name: 'Dashboard', to: '/dashboard', icon: <SpeedIcon/> },
  {
    name: 'Students',
    to: '/students',
    subMenus: [{ name: 'Manage Students', to: '/students/ManageStudents' }],
    icon: <PersonIcon/>,
  },
  {
    name: 'Teachers',
    to: '/teachers',
    subMenus: [{ name: 'Manage Teachers', to: '/teachers/ManageTeachers' }],
    icon: <SchoolIcon/>,
  },
]

const Sidebar = ({ onCollapse, onToggleOff }) => {
  const [inactive, setInactive] = useState(false)
  const [toggleoff, setToggleoff] = useState(false)
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setInactive(true);
      } else {
        setInactive(false);
      }

      if (window.innerWidth < 496) {
        setToggleoff(true);
      } else {
        setToggleoff(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
  
    <div
      className={`side-menu ${inactive ? 'inactive' : ''} ${
        toggleoff ? 'toggleoff' : ''
      }`}
    >
      <div className="top-section">
        <div className="logo">
          <img src={"https://img.freepik.com/free-vector/hand-drawn-high-school-logo-design_23-2149667303.jpg?w=740&t=st=1700569642~exp=1700570242~hmac=ab144bcf4bddf15a0eaefa943b4b880374d2943824313a9ff6eef12e81c24f6b"} alt="school-logo" />
        </div>
        <h3>CRUD</h3>
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.to}
              subMenus={menuItem.subMenus}
              icon={<span className="menu-icon">{menuItem.icon}</span>}
              onClick={() => {
                if (inactive) {
                  setInactive(false)
                }
              }}
            />
          ))}
        </ul>
      </div>

      <div className="toggle-menu-btn" onClick={() => setInactive(!inactive)}>
        {inactive ? (
          <i className="bi bi-arrow-right-square-fill"></i>
        ) : (
          <i className="bi bi-arrow-left-square-fill"></i>
        )}
      </div>

      <div className="side-menu-footer">
        <div className="avatar">
          <img src={"https://cdn.vectorstock.com/i/1000x1000/32/57/dog-smoking-vector-47023257.webp"} alt="user" />
        </div>
        <div className="user-info">
          <h5>Sasidharan</h5>
          <p>ddsdharan@outlook.com</p>
        </div>
      </div>
    </div>

  )
}

export default Sidebar;