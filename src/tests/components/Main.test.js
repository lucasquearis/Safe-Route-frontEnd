import React from "react";
import { render, screen } from '@testing-library/react';
import Main from "../../pages/Main";


describe('Testa componente Main', () => {
  it('Verifica se todos componentes do Main são renderizados corretamente', () => {
    render(<Main />);
    const hero = screen.getByText(/história app/i);
    expect(hero).toBeInTheDocument();
  });
});