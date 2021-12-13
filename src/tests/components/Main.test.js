import React from "react";
import { render, screen } from '@testing-library/react';
import Main from "../../pages/Main";


describe('Testa componente Main', () => {
  it('Verifica se todos componentes do Main são renderizados corretamente', () => {
    render(<Main />);
    const hero = screen.getByText(/história app/i);
    const labelCidades = screen.getByLabelText(/cidade/i);
    const labelAvaliacoes = screen.getByLabelText(/avaliações/i);
    const labelCategorias = screen.getByLabelText(/categorias/i);
    const cardPlace = screen.getByTestId(/section-cards/i);
    expect(hero).toBeInTheDocument();
    expect(labelAvaliacoes).toBeInTheDocument();
    expect(labelCidades).toBeInTheDocument();
    expect(labelCategorias).toBeInTheDocument();
    expect(cardPlace).toBeInTheDocument();
    expect(labelCidades).toHaveClass('custom-select');
    expect(labelAvaliacoes).toHaveClass('custom-select');
    expect(labelCategorias).toHaveClass('custom-select');
  });
});