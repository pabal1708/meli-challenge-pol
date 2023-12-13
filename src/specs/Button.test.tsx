import React from "react";
import '@testing-library/jest-dom'
import {render, fireEvent, screen} from '@testing-library/react'
import Button from '../components/button/index'

test('should render a button', () => {
  const onClick = () => {console.log("test")} 
  render(<Button text="button"  onClick={onClick}/>)

  expect(screen.queryByText("button")).toBeInTheDocument()

})

test('should render a button with chevron', () => {
  const onClick = () => {console.log("test")} 
  render(<Button text="button" type="dropdown" onClick={onClick}/>)
  expect(screen.queryByTestId("img")).toBeInTheDocument()
  

})