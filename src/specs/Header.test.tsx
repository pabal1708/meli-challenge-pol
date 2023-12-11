import React from "react";
import '@testing-library/jest-dom'


import {render, screen} from '@testing-library/react'
import Header from '../components/header'

test('should render the header component', () => {
  
  render(<Header />)

  expect(screen.queryByTestId("main-header")).toBeInTheDocument()

})