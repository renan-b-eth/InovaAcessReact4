"use client"

import React, { useState } from 'react';
import Footer from '../Footer/page';
import Header from '../Header/page';
import axios from 'axios';

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senha2, setSenha2] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const novoAdmin = {
        nome,
        email,
        senha,
        senha2
      };
  
      try {
        const response = await axios.post('/api/admins', novoAdmin);
        console.log('Admin cadastrado com sucesso!', response.data);
        // Limpar o formulário
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <>
        <Header></Header>
            <main>
                <div className="content-login">
                    <div className="form">
                        <form action="POST" onSubmit={handleSubmit}>
                        <label htmlFor="" className="titulo-label">NOME:</label>
                            <input type="text" name="nome" placeholder="DIGITE SEU NOME" className="input-estilizado" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                            <label htmlFor="nome" className="titulo-label">EMAIL:</label>
                            <input type="text" name="email" placeholder="DIGITE SEU LOGIN" className="input-estilizado" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            <label htmlFor="email">SENHA:</label>
                            <input type="text" name="senha" placeholder="DIGITE SUA SENHA:" className="input-estilizado" value={senha} onChange={(e) => setSenha(e.target.value)}></input>
                            <label htmlFor="senha">SENHA NOVAMENTE:</label>
                            <input type="text" name="senha2" placeholder="DIGITE NOVAMENTE SUA SENHA:" className="input-estilizado" value={senha} onChange={(e) => setSenha2(e.target.value)}></input>
                            <button type="submit" onClick={handleSubmit} className='button-azul'>Cadastrar</button>
                        </form>
                    </div>
                </div>
            </main>
            <section id="footer">
                <Footer></Footer>
            </section>
        
    </>
    
  );
};

export default Cadastro;