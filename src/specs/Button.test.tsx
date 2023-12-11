import React from "react";
import '@testing-library/jest-dom'


import {render, fireEvent, screen} from '@testing-library/react'
import Button from '../components/button/index'

test('should render a button', () => {
  const onClick = () => {console.log("test")} 
  render(<Button text="pepe" type="dropdown" onClick={onClick}/>)

  expect(screen.queryByText("pepe")).toBeInTheDocument()

})