import { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouterType {
  children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouterType) {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  useEffect(() => {
    const tokenExpiryTime = 10 * 60 * 60 * 1000; // 10 horas em milissegundos

    if (token) {
      setTimeout(() => {
        alert('Sua sessão expirou, faça o login novamente!');
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setToken(null); // Atualiza o estado do token
        window.location.reload();
      }, tokenExpiryTime);
    }
  }, [token]);

  const isAuth = token;

  return isAuth ? <>{children}</> : <Navigate to="/auth" />;
}
