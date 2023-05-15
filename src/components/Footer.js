import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <footer className="page-footer">
      <div className='footer-copyright'>
        <div className="container">
          © {new Date().getFullYear()} coppyright texst
          <Link to='/' className='grey-text text-lighten-4 right'>
            REPO
          </Link>
        </div>
      </div>
    </footer>
  )
}
