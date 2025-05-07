// // src/components/PrivateRoutes.js
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const PrivateRoutes = ({ children, requireAdmin = false }) => {
//   const user = useSelector((state) => state.auth.user);

//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   if (requireAdmin && user.role !== 'admin') {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default PrivateRoutes;
