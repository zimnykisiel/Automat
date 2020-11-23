// import React, { createContext, useReducer } from 'react';
// import AppReducer from './AppReducer';

// //Initial state
// const automatState = {
//     automatId
// }

// export const GlobalContext = createContext(automatState);

// export const GlobalProvider = ({ children }) => {
//     const[state, dispatch] = useReducer(AppReducer, automatState);
    

//     return (<GlobalContext.Provider value={{
//         automatId: state.automatId,
//     }}>
//         {children}
//     </GlobalContext.Provider>);
// }