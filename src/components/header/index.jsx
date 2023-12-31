import React from 'react'
import MpLogo from '../assets/icons/mpLogo'
import BackArrow from '../assets/icons/backArrow'

const Header = ({ pathname }) => {
  const isDetail = pathname === '/detail'
  return (
    <div className="header" data-testid="main-header">
      <a className='header-back-button' href={`https://meli-challenge-pol.vercel.app/`}>
        {isDetail && (
          <BackArrow />
        )}
      </a>
      <div  className="header-logo" >
        <MpLogo />
      </div>
    </div>
  )
}

export default Header;
