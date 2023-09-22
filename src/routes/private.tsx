import { ReactNode, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouterType {
  children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouterType) {
  useEffect(() => {
    const tokenExpiryTime = 1 * 60 * 1000;
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      setTimeout(() => {
        alert('Sua sessão expirou, faça o login novamente!');
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        window.location.reload();
      }, tokenExpiryTime);
    }
  }, []); 

  const isAuth = localStorage.getItem('token');

  return isAuth ? <>{children}</> : <Navigate to="/auth" />;
}
