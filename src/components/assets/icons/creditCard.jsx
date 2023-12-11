
import React from 'react'

const CreditCard = ({ isSmall }) => {
  const width = isSmall ? "20" : "30";
  const height = isSmall ? "20" : "30";

  return (
    <svg width={width} height={height} viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.74902 23.25H9.24902V21.75H4.74902V23.25Z" fill="black" fill-opacity="0.9" />
      <path d="M15.249 23.25H10.749V21.75H15.249V23.25Z" fill="black" fill-opacity="0.9" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.49902 5.25H29.499C30.7417 5.25 31.749 6.25736 31.749 7.5V25.5C31.749 26.7426 30.7417 27.75 29.499 27.75H2.49902C1.25638 27.75 0.249023 26.7426 0.249023 25.5V7.5C0.249023 6.25736 1.25638 5.25 2.49902 5.25ZM1.74902 11.9796V14.25H30.249V11.9796H1.74902ZM30.249 10.4796H1.74902V7.5C1.74902 7.08579 2.08481 6.75 2.49902 6.75H29.499C29.9132 6.75 30.249 7.08579 30.249 7.5V10.4796ZM30.249 15.75H1.74902V25.5C1.74902 25.9142 2.08481 26.25 2.49902 26.25H29.499C29.9132 26.25 30.249 25.9142 30.249 25.5V15.75Z" fill="black" fill-opacity="0.9" />
    </svg>
  )
}
export default CreditCard