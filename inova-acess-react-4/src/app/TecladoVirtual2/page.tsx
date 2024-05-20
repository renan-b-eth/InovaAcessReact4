"use client"
import React from 'react';
import  Keyboard  from 'react-simple-keyboard';

const TecladoVirtual2 = () => {
  const layout = {
    default: [
      'q w e r t y u i o p',
      'a s d f g h j k l',
      'z x c v b n m',
      '{space}',
    ],
  };

  const onChange = (input) => {
    console.log('Entrada do teclado:', input);
  };

  return (
    <div>
      <Keyboard layout={layout} onChange={onChange} />
    </div>
  );
};

export default TecladoVirtual2;