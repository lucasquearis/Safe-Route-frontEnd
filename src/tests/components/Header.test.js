import React from "react";
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

describe('Testa componente Header', () => {
  it('Verifica se todos componentes do Header são renderizados corretamente', () => {
    render(<Header />);
    const logo = screen.getByAltText(/logo/i);
    const signIn = screen.getByText(/sign in/i);
    expect(logo).toBeInTheDocument();
    expect(signIn).toBeInTheDocument();
  });
});