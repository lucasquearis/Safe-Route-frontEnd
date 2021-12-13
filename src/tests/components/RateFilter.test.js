import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import RateFilter from "../../components/Filters/RateFilter";
import PlacesProvider from "../../context/PlacesProvider";

describe('Testa componente RateFilter', () => {
  it('Verifica comportamento do componente alterando sua option', () => {
    render(
      <RateFilter />,{
        wrapper: PlacesProvider
      }
    );
    const avaliacaoSelect = screen.getByTestId('rate-select');
    expect(avaliacaoSelect).toHaveClass('custom-select');
    expect(avaliacaoSelect).toHaveValue('all');
    expect(avaliacaoSelect).toBeInTheDocument();
    fireEvent.change(avaliacaoSelect, { target: { value: '4' } });
    expect(avaliacaoSelect).toHaveValue('4');
  });
});