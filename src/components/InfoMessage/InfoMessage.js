
import { useState } from 'react';
import './InfoMessage.css'

const InfoMessage = ({ children }) => {

    const [classes, setClasses] = useState('info-message')

    return (
        <div className={classes} onClick={() => setClasses('info-message hide')}>
            <span> &#8505; </span>
            <p>{children}</p>
        </div>
    );
}

export default InfoMessage;