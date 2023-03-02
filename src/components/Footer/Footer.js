import React from 'react';
import "./Footer.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer bg-orange'>
      <div className = "container py-4 text-center">
        <div className='flex align-center justify-center text-white fw-3 fs-14'>
          <Link to = "/" className='text-uppercase'>privacy policy</Link>
          <div className='vert-line'></div>
          <Link to = "/" className='text-uppercase'>terms of services</Link>
          <div className='vert-line'></div>
          <Link to = "/" className='text-uppercase'>About Company</Link>
        </div>
        <span className='text-white copyright-text text-manrope fs-14 fw-3'> 2023  &copy; All Rights Reserved by Rana</span>
      </div>
    </footer>
  )
}

export default Footer