"use client";

import React, { useState } from 'react';
import Login from './ui/forms/login'; // Caminho corrigido para o componente Login
import Registro from './ui/forms/registro'; // Caminho corrigido para o componente Registro
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'; // Importação do Typography para exibir o texto

export default function Page() {
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre login e registro

  const toggleForm = () => {
    setIsLogin(!isLogin); // Alterna entre login e registro
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: 2,
      }}
    >
      <Typography
        variant="h3"
        sx={{ textAlign: 'center', marginBottom: 1 }} // Centraliza o texto e adiciona margem inferior
      >
        PROCEEM-UFRN
      </Typography>
      {isLogin ? <Login /> : <Registro />}
      <button
        onClick={toggleForm}
        style={{
          cursor: 'pointer',
          background: 'none',
          border: 'none',
          color: '#1976d2',
          textDecoration: 'underline',
          marginTop: 0,
        }}
      >
        {isLogin ? 'Não tem uma conta? Registre-se' : 'Já tem uma conta? Faça login'}
      </button>
    </Box>
  );
}