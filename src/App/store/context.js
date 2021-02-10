import * as React from 'react';

const globalContext = React.createContext({
    API_KEY: '17108eb4b06d23334fdb6f5044fa8a88'
})

const useGlobalContext = () => React.useContext(globalContext);

export default useGlobalContext;