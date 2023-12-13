import React from "react";
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import Description from '../components/listItem/description'

test('should render a description item', () => {

  render(<Description title="title" description="description"/>)

  expect(screen.queryByText("title")).toBeInTheDocument()
  expect(screen.queryByText("description")).toBeInTheDocument()

})