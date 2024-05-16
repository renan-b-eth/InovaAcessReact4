"use client"
import React, { useState } from 'react';
import './menurapidoacessivel.css';

const MenuRapidoAcessivel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="quick-access-menu">
      <button onClick={toggleMenu}>Menu Rápido</button>

      {isOpen && (
        <div className="menu-content">
          <div className="access-item">
            <a href="#">
              <i className="fas fa-file-alt"></i>
              <span>Opa 2</span>
            </a>
          </div>

          <div className="access-item">
            <a href="#">
              <i className="fas fa-user-md"></i>
              <span>Encontre um Médico</span>
            </a>
          </div>

          <div className="access-item">
            <a href="#">
              <i className="fas fa-file-invoice-dollar"></i>
              <span>opa</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuRapidoAcessivel;