import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import DropDown from '../components/dropdown/'
import dropdownFilterData from '../utils/dropdownFilterData'


test('"When it is called and fully loaded a Combobox', () => {

    render(<DropDown text="filtros" dropdownfilterData={dropdownFilterData} />)

    expect(screen.queryByText("filtros")).toBeInTheDocument()
});







