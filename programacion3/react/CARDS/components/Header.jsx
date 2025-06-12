export const Header = ({}) => {
  return (
    <header className="header">
      {/* <img src="../images/logo.png" alt="" class="logo"> */}
      <nav>
        <ul class="nav-list">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Acerca de nosotros</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
      <div class="menu-button-container">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
    </header>
  );
};
