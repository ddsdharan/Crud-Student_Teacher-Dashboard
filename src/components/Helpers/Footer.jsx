import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
     Company
          </a>
          <span className="text-muted">© 2023 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="/#" style={{ fontSize: '30px' }}>
              <i className="TwitterIcon"><TwitterIcon/></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="/#" style={{ fontSize: '30px' }}>
              <i className="InstagramIcon"><InstagramIcon/></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="/#" style={{ fontSize: '30px' }}>
              <i className="FacebookIcon"><FacebookIcon /></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer;