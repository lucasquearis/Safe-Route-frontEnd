import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from "../../components/Header/SearchBar";
import App from '../../App';


describe('Testa componente SearchBar', () => {
  it('Verifica se componente SearchBar renderiza todos os componentes corretamente', () => {
    render(<SearchBar />);
    const inputText = screen.getByPlaceholderText(/procurar.../i);
    expect(inputText).toBeInTheDocument();
  });
  it('Verifica se ao digitar algo no SearchBar, response ao resultado da pesquisa', () => {
    render(<App />);
    const inputText = screen.getByPlaceholderText(/procurar.../i);
    const oscarNiemayer = screen.getByText(/Oscar Niemayer/i);
    fireEvent.change(inputText, { target: { value: 'curitiba' } });
    expect(oscarNiemayer).toBeInTheDocument();
    expect(inputText).toHaveValue('curitiba');
  });
});