import * as React from 'react';

const globalContext = React.createContext({
})

export const useGlobalContext = () => React.useContext(globalContext);