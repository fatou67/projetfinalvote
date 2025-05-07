// import React, { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [authState, setAuthState] = useState({
//     user: JSON.parse(localStorage.getItem('voterInfo')) || null,
//     token: localStorage.getItem('userToken') || null
//   });

//   return (
//     <AuthContext.Provider value={{ ...authState, setAuthState }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };