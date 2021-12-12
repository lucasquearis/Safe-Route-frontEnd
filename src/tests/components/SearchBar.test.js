import React from "react";
import { render, screen } from '@testing-library/react';
import SearchBar from "../../components/Header/SearchBar";


describe('Testa componente SearchBar', () => {
  it('Verifica se componente SearchBar renderiza todos os componentes corretamente', () => {
    render(<SearchBar />);
    const inputText = screen.getByPlaceholderText(/procurar.../i);
    expect(inputText).toBeInTheDocument();
  });
});