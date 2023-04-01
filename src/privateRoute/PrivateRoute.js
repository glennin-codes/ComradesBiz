import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('token');

  return (
    <Route {...rest} element={isAuthenticated ? <Component /> : <Navigate to="/login" />} />
  );
};

export default PrivateRoute;
