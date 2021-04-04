import { useContext } from 'react';
import { ErrorContext } from '../../contexts/ErrorContext';
import './ErrorWindow.css'

const ErrorWindow = (params) => {

    const { clearError } = useContext(ErrorContext);

    // const clearErr = params.clearErr;

    return (
        <div className="error-window">
            <p className="error-message">{params.children}</p>
            <button className="error-button" onClick={clearError}>Close</button>
        </div>
    );
}

export default ErrorWindow;