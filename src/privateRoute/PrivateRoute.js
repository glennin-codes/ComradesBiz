import { Route, useNavigate, } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('token');
const navigate=useNavigate();
  return (
     
    
    <Route {...rest} element={isAuthenticated ? <Component /> : navigate('/login')} />
  );
};

export default PrivateRoute;
