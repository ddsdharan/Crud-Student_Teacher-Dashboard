// import React, { useState } from 'react'
// import {  NavLink } from 'react-router-dom'

// const MenuItem = ({ name, subMenus, icon, onClick, to }) => {
//   const [expand, setExpand] = useState(false)
//   return (
//     <li onClick={onClick}>
//       <NavLink to={to} onClick={() => setExpand(!expand)} className="menu-item">
//         <div className="menu-icon">
//           <i className={icon}></i>
//         </div>
//         <span>{name}</span>
//         {subMenus && subMenus.length > 0 ? (
//           <div className="downarrow">
//             <i className="bi bi-chevron-down"></i>
//           </div>
//         ) : null}
//       </NavLink>
//       {subMenus && subMenus.length > 0 ? (
//         <ul className={`sub-menu ${expand ? 'active' : ''}`}>
//           {subMenus.map((menu, index) => (
//             <li key={index}>
//               <NavLink to={menu.to}>{menu.name}</NavLink>
//             </li>
//           ))}
//         </ul>
//       ) : null}
//     </li>
//   )
// }

// export default MenuItem;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ name, subMenus, icon, to }) => {
  const [expand, setExpand] = useState(false);

  const handleToggleExpand = () => {
    setExpand(!expand);
  };

  return (
    <li className="menu-item">
      <NavLink
        to={to}
        className="menu-link"
        onClick={subMenus && subMenus.length > 0 ? handleToggleExpand : null}
      >
        <div className="menu-icon">
          {typeof icon === 'string' ? (
            <i className={icon}></i>
          ) : (
            <span className="custom-icon">{icon}</span>
          )}
        </div>
        <span className="menu-text">{name}</span>
        {subMenus && subMenus.length > 0 && (
          <div className="downarrow">
            <i className={`bi ${expand ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
          </div>
        )}
      </NavLink>
      {subMenus && subMenus.length > 0 && (
        <ul className={`sub-menu ${expand ? 'active' : ''}`}>
          {subMenus.map((menu, index) => (
            <li key={index}>
              <NavLink to={menu.to}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
