import React from 'react';

export default function Navbar() {
  return (
    <div className='nav-container'>
      <div className='nav-logoRes'>
        <img
          className='logoRes'
          src='/assets/Images/Icon-transparent.png'
          alt=''
        />
      </div>
      <nav className='navbar'>
        <div className='nav-logo'>
          <img
            className='logo'
            src='/assets/Images/HF-logo-white.png'
            alt=''
          />
        </div>
        <div className='h3-container'>
          <div className='nav-kt'>
            <h3 className='nav-h3'>Tjänster</h3>
          </div>
          <div className='nav-kt'>
            <h3 className='nav-h3'>Kontakta oss</h3>
          </div>
          <div className='nav-gold'>
            <h3 className='nav-h3'>Boka här</h3>
          </div>
        </div>
      </nav>
    </div>
  );
}
