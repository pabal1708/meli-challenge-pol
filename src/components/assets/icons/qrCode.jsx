
import React from 'react'

const QrCode = ({ isSmall }) => {
  const width = isSmall ? "20" : "30";
  const height = isSmall ? "20" : "30";

  return (
    <svg width={width} height={height} viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.0625 7.25V5.5625H6.75V7.25H5.0625Z" fill="black" fill-opacity="0.9" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.6875 2.1875H10.125V10.625H1.6875V2.1875ZM3.375 3.875V8.9375H8.4375V3.875H3.375Z" fill="black" fill-opacity="0.9" />
      <path d="M5.0625 22.4262V20.7725H6.75V22.4262H5.0625Z" fill="black" fill-opacity="0.9" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.125 17.375H1.6875V25.8125H10.125V17.375ZM3.375 24.125V19.0625H8.4375V24.125H3.375Z" fill="black" fill-opacity="0.9" />
      <path d="M20.25 7.25V5.5625H21.9375V7.25H20.25Z" fill="black" fill-opacity="0.9" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3125 2.1875H16.875V10.625H25.3125V2.1875ZM18.5625 8.9375V3.875H23.625V8.9375H18.5625Z" fill="black" fill-opacity="0.9" />
      <path d="M11.8125 14.0225V19.0625H13.5V17.375H15.1875V15.6875H13.5V14.0225H11.8125Z" fill="black" fill-opacity="0.9" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8125 12.3125V10.625H13.5V8.94875H15.1875V12.3125H11.8125ZM15.1875 12.3125H18.5625V14H15.1875V12.3125Z" fill="black" fill-opacity="0.9" />
      <path d="M13.5 7.25V8.94875H11.8125V2.1875H15.1875V3.875H13.5V5.5625H15.1875V7.25H13.5Z" fill="black" fill-opacity="0.9" />
      <path d="M18.5625 19.0625H16.875V15.6875H18.5625V19.0625Z" fill="black" fill-opacity="0.9" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M23.625 19.0625H18.5625V24.125H16.875V25.8125H18.5625V24.125H23.625V25.8125H25.3125V24.125H23.625V22.4375H25.3125V20.7725H23.625V19.0625ZM20.25 20.75V22.4375H21.9375V20.75H20.25Z" fill="black" fill-opacity="0.9" />
      <path d="M23.625 19.0625V15.6875H25.3125V19.0625H23.625Z" fill="black" fill-opacity="0.9" />
      <path d="M16.875 19.0625V22.4375H15.1875V25.8125H11.8125V24.125H13.5V22.4375H11.8125V20.7725H13.5V22.4262H15.1875V19.0625H16.875Z" fill="black" fill-opacity="0.9" />
      <path d="M20.25 15.6875V17.3413H21.9375V15.6875H20.25Z" fill="black" fill-opacity="0.9" />
      <path d="M1.6875 14.0225V15.6763H3.375V14.0225H1.6875Z" fill="black" fill-opacity="0.9" />
      <path d="M6.75 14H8.4375V12.3125H10.125V15.6875H5.0625V14H3.375V12.3125H6.75V14Z" fill="black" fill-opacity="0.9" />
      <path d="M25.3125 14H23.625V15.6762H21.9375V14H20.25V12.3125H25.3125V14Z" fill="black" fill-opacity="0.9" />
    </svg>
  )
}

export default QrCode