import { createContext, useState } from 'react';

export const ErrorContext = createContext();



const ErrorContextProvider = (props) => {
    const [errorMessage, setErrorMesage] = useState('');

    const displayError = (errorDataMessage) => {
        setErrorMesage(errorDataMessage);
    }

    const clearError = () => {
        setErrorMesage('');
    }
    return (
        <ErrorContext.Provider value={{ errorMessage, displayError, clearError }}>
            {props.children}
        </ErrorContext.Provider>
    );
}

export default ErrorContextProvider;