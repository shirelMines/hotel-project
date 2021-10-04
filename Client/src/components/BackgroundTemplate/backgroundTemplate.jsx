import { React } from 'react';
import './backgroundTemplate.css';

const BackgroundTemplate = ({children,backgroundStyle}) => {
    return ( 
        <header className={backgroundStyle}>{children}</header>
     );
}

export default BackgroundTemplate;

