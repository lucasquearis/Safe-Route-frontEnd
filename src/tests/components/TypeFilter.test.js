import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import TypeFilter from "../../components/Filters/TypeFilter";
import PlacesProvider from "../../context/PlacesProvider";

describe('Testa componente TypeFilter', () => {
  it('Verifica comportamento do componente alterando sua option', () => {
    render(
      <TypeFilter />, {
        wrapper: PlacesProvider
      }
    );
    const typeSelect = screen.getByTestId('type-select');
    expect(typeSelect).toHaveClass('custom-select');
    expect(typeSelect).toHaveValue('all');
    expect(typeSelect).toBeInTheDocument();
    fireEvent.change(typeSelect, { target: { value: 'hospedagem' } });
    expect(typeSelect).toHaveValue('hospedagem');
  });
});