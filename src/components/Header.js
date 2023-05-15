import {Link} from "react-router-dom"

export default function Header() {
  return(
    <nav>
      <div className='nav-wraooer'>
        <Link to="/" className='brand-logo'>
          React
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}