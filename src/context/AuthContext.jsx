import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import sessionStorageService from '../services/sessionStorage.service.js';

const AuthContext = createContext(null);

// Menús por rol
const menuAdmin = [
  {
    name: 'Dashboard',
    path: '/dashboard',
  },
  {
    name: 'Usuarios',
    path: '/usuarios',
  },
  {
    name: 'Perfil',
    path: '/perfil',
  },
];

const menuUser = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Perfil', path: '/perfil' },
];

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState('user');
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const stored = sessionStorageService.get('auth', null);

    if (stored?.token) {
      const storedRole = stored.role || 'user';
      setToken(stored.token);
      setUser(stored.user || null);
      setRole(storedRole);
      setMenu(storedRole === 'admin' ? menuAdmin : menuUser);
    }
  }, []);

  const persist = useCallback((authData) => {
    sessionStorageService.set('auth', authData);
  }, []);

  const login = useCallback(
    (payload) => {
      const authData = payload?.token
        ? payload
        : {
            token: payload?.token,
            user: payload?.user,
            role: payload?.role || 'user',
          };

      const resolvedRole = authData.role || 'user';
      const resolvedMenu = authData.menu?.length
        ? authData.menu
        : resolvedRole === 'admin'
        ? menuAdmin
        : menuUser;

      const finalAuth = {
        token: authData.token,
        user: authData.user,
        role: resolvedRole,
        menu: resolvedMenu,
      };

      setToken(finalAuth.token);
      setUser(finalAuth.user);
      setRole(finalAuth.role);
      setMenu(finalAuth.menu);
      persist(finalAuth);
    },
    [persist]
  );

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    setRole('user');
    setMenu([]);
    sessionStorageService.remove('auth');
  }, []);

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{user, token, role, menu, login, logout, isAuthenticated,}}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error(
      'useAuth debe usarse dentro de AuthProvider'
    );
  }

  return ctx;
}

export default AuthContext;