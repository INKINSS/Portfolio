import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMessage, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import '../styles/base/header.scss';

const Header = () => {
    return (
        <>
            <header>
                <nav className='navigation'>
                    <ul className='menuHeader'>
                        <li><FontAwesomeIcon className='icon iconHome' icon={faHome}/></li>
                        <li><FontAwesomeIcon className='icon iconUser' icon={faUser}/></li>
                        <li><FontAwesomeIcon className='icon iconFolder' icon={faFolderOpen}/></li>
                        <li><FontAwesomeIcon className='icon iconGmail' icon={faMessage}/></li>
                    </ul>
                    <FontAwesomeIcon className='iconLight' icon={faLightbulb}/>
                </nav>
            </header>

        </>

    )
}

export default Header