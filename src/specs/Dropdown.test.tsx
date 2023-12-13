import React from "react";
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from "@testing-library/react";
import DropDown from '../components/dropdown/'
import dropdownFilterData from '../utils/dropdownFilterData'
import { useRouter } from 'next/router';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'))

test('"When it is called and fully loaded a Combobox', () => {

    render(<DropDown text="filtros" dropdownfilterData={dropdownFilterData} />)
    expect(screen.queryByText("filtros")).toBeInTheDocument()
});


test('"When it is clicked a Combobox', () => {
 
    render(<DropDown text="filtros" dropdownfilterData={dropdownFilterData} />)
    const dropDown = screen.queryByText("filtros");
    fireEvent.click(dropDown)
    expect(screen.queryByText("Cobros con tarjeta")).toBeInTheDocument()
});






