import React from 'react'
import '../styles/base/footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faFacebook, faInstagram, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer>
            <nav className='navigation'>
                    <ul className='menuFooter'>
                        <li><FontAwesomeIcon className='icon iconGithub' icon={faGithub}/></li>
                        <li><FontAwesomeIcon className='icon iconInstagram' icon={faInstagram}/></li>
                        <li><FontAwesomeIcon className='icon iconFacebook' icon={faFacebook}/></li>
                        <li><FontAwesomeIcon className='icon iconTwitter' icon={faTwitter}/></li>
                        <li><FontAwesomeIcon className='icon iconDiscord' icon={faDiscord}/></li>
                    </ul>
                </nav>
        </footer>
    )
}

export default Footer