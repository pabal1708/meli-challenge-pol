import React from "react";
import '@testing-library/jest-dom'
import {render, fireEvent, screen} from '@testing-library/react'
import Modal from '../components/detailModal/modal'

test('should render a Modal deailt ', () => {
  
  render(<Modal type="qr" title="title" description="description" amount="12"/>)

  expect(screen.queryByText("title")).toBeInTheDocument()
  expect(screen.queryByText("description")).toBeInTheDocument()


})

