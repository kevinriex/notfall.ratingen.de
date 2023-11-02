export default function Footer() {
  return (
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-body-secondary">
                Startseite
              </a>
            </li>
            <li className="nav-item">
              <a href="/impressum" className="nav-link px-2 text-body-secondary">
                Impressum
              </a>
            </li> 
          </ul>
          <p className="text-center text-body-secondary">© 2023, Stadt Ratingen</p>
        </footer>
      </div>
  );
}
