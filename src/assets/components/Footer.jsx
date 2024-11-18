const Footer = () => {
  return (
    <footer className="site-footer">
    <div className="footer-info">
      <h5 className="footer-h5">Sistema Muebles.cl</h5>
      <p className="footer-p">Correo Electronico: <b>contacto@sistemamuebles.cl</b></p>
    </div>
    <div className="footer-social">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook"></i>
      </a>
      <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-whatsapp"></i>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram"></i>
      </a>
    </div>
    <div className="footer-copyright">
      <p>© 2024 Sistema Muebles. Todos los derechos reservados.</p>
    </div>
  </footer>
);
}

export default Footer;