import React from "react";
import { render, screen } from '@testing-library/react';
import Hero from "../../pages/Main/Hero";

describe('Testa componente Hero', () => {
  it('Verifica se todos componentes do Hero são renderizados corretamente', () => {
    render(<Hero />);
    const textHero = screen.getByTestId(/text-hero/i);
    expect(textHero).toBeInTheDocument();
  });
});