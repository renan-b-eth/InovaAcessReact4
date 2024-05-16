"use client"
import React, { useState } from 'react';
import './menuacessivel.css'; 

const MenuAcessivel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accessibility-menu">
      <button onClick={toggleMenu}>Controle de acessibilidade</button>

      {isOpen && (
        <div className="menu-content">
          <div className="font-control">
            <label htmlFor="fontSize">Tamanho da fonte</label>
            <select id="fontSize">
              <option value="small">Pequeno</option>
              <option value="medium">Médio</option>
              <option value="large">Grande</option>
            </select>
          </div>

          <div className="spacing-control">
            <label htmlFor="lineSpacing">Espaço entre linhas</label>
            <select id="lineSpacing">
              <option value="1.0">Padrão</option>
              <option value="1.5">1,5</option>
              <option value="2.0">2,0</option>
            </select>

            <label htmlFor="letterSpacing">Espaço entre letras</label>
            <select id="letterSpacing">
              <option value="normal">Padrão</option>
              <option value="1px">1px</option>
              <option value="2px">2px</option>
            </select>
          </div>

          <div className="reading-assistance">
            <label htmlFor="screenReader">Leitor de sites</label>
            <select id="screenReader">
              <option value="off">Desligado</option>
              <option value="on">Ligado</option>
            </select>

            <label htmlFor="readerMode">Modo de leitura</label>
            <select id="readerMode">
              <option value="off">Desligado</option>
              <option value="on">Ligado</option>
            </select>
          </div>

          <div className="highlighting">
            <label htmlFor="linkHighlighting">Destaque de links</label>
            <select id="linkHighlighting">
              <option value="default">Padrão</option>
              <option value="underline">Sublinhado</option>
              <option value="invert">Invertido</option>
            </select>

            <label htmlFor="contentMagnifier">Lupa de Conteúdo</label>
            <select id="contentMagnifier">
              <option value="off">Desligado</option>
              <option value="1x">1x</option>
              <option value="1.5x">1,5x</option>
              <option value="2x">2x</option>
            </select>
          </div>

          <div className="color-control">
            <label htmlFor="colorContrast">Contraste de cores</label>
            <select id="colorContrast">
              <option value="default">Padrão</option>
              <option value="high">Alto</option>
              <option value="highest">Altíssimo</option>
            </select>

            <label htmlFor="colorSaturation">Saturação</label>
            <select id="colorSaturation">
              <option value="default">Padrão</option>
              <option value="low">Baixa</option>
              <option value="high">Alta</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuAcessivel;