import React, {useContext} from "react";
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import ListItem from '../components/listItem'
import { Context } from '../context/context';

test('should render a List item', () => {
  const { filteredTransactions } = useContext(Context);

  render(<ListItem title="title" description="description"/>)

  expect(screen.getByTestId("list-item")).toBeInTheDocument()


})