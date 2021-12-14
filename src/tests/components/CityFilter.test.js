import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import CityFilter from "../../components/Filters/CityFilter";
import PlacesProvider from '../../context/PlacesProvider';

describe('Testa componente CityFilter', () => {
  it('Verifica comportamento do componente alterando sua option', () => {
    render(
      <CityFilter />, {
        wrapper: PlacesProvider
      }
    );
    const cidadeSelect = screen.getByTestId('city-select');
    expect(cidadeSelect).toHaveClass('custom-select');
    expect(cidadeSelect).toHaveValue('all');
    expect(cidadeSelect).toBeInTheDocument();
    fireEvent.change(cidadeSelect, { target: { value: 'curitiba' } });
    expect(cidadeSelect).toHaveValue('curitiba');
  });
});