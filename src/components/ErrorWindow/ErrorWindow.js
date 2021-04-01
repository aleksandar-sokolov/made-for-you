import './ErrorWindow.css'

const ErrorWindow = (params) => {

    // const hideErr = (e) => {
    //     e.target.parentElement.classList.add('hide-error')
    // }

    const clearErr = params.clearErr;

    return (
        <div className="error-window">
            <p className="error-message">{params.children}</p>
            <button className="error-button" onClick={clearErr}>Close</button>
        </div>
    );
}

export default ErrorWindow;