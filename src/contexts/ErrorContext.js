import { createContext, useState } from 'react';

export const ErrorContext = createContext();

const [errorMesage, setErrorMesage] = useState('');

const displayError = (errorDataMessage) => {
    setErrorMesage(errorDataMessage);
}

const clearError = () => {
    setErrorMesage('');
}

const ErrorContextProvider = (props) => {
    return (
        <ErrorContext.Provider value={{ errorMesage, displayError, clearError }}>
            {props.children}
        </ErrorContext.Provider>
    );
}

export default ErrorContextProvider;