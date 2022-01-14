import './footer.css'
import { BrowserRouter as Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer class="footer">
      <Link to="/sign-in">
        <p class="footer-text">Copyright 2020 Argent Bank</p>
      </Link>
    </footer>
  )
}
