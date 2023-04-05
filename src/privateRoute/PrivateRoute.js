import { Navigate, Route, } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token');

  
    if (!isAuthenticated){
          return <Navigate to='/login'/>

    }
    return (
      children);
    

};

export default PrivateRoutes;
