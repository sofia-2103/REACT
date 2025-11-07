import CartWidget from './CartWidget'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <a className="navbar-brand fs-3 fw-bold" href="#">
        🛒 SIBO Market
      </a>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
        </ul>
      </div>

      <CartWidget />
    </nav>
  )
}

export default NavBar
