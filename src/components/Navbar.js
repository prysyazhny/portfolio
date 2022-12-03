import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.scss'

const Navbar = () => {

const goToGithub = () => {

    window.location.replace('https://github.com/prysyazhny');

}

  return (
    <div className='sum'>
        <nav className='item'>
            <ul className='ul'>

                <li>
                    <Link onClick={goToGithub}>My Github</Link>
                </li>
                <li>
                    <Link to = '/'>Home</Link>
                </li>
                <li>
                    <Link to = '/contact'>Contact Me</Link>
                </li>                
                
            </ul>
        </nav>
    </div>
  )
}

export default Navbar