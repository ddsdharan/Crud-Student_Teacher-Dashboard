import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

const Titlebar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="/#">
    <div className="heading d-flex my-2">
            <h1 style={{ fontFamily: 'Arvo' }}>Students & Teacher management system</h1>
            <img
              src={"https://img.freepik.com/free-vector/education-logo-vector-design_474888-2129.jpg?w=740&t=st=1700568951~exp=1700569551~hmac=6503dd512df022c565df017c15edb21d6f0f769abb15eee0a727be1c0b542cd4"}
              style={{ width: '50px', height: '50px', marginLeft: '10px' }} alt=""
            />
          </div>
    </a>
  </div>
</nav>
  );
};

export default Titlebar;
