import { useSelector } from 'react-redux';

function useAuth() {
  const auth = useSelector((state) => state.auth);
  const isAuthenticated = Boolean(auth.user && auth.token);

  return {
    user: auth.user,
    token: auth.token,
    isAuthenticated,
  };
}

export default useAuth;
