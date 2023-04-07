//  The Navbar title is received through PROPS

export default function navbar(props) {
  return (
    /*
    <nav
      className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.mode}`}
      style={{ height: "10.25vh" }}
      data-bs-theme={props.mode} // Using state value sent as prop
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
            <div className="navbar-nav" role="button" onClick={props.theme}>
              {/* Function sent by App.js as prop *}
              <span className="nav-link">Night Mode &#127769;</span>
            </div>
          </ul>
        </div>
      </div>
    </nav>
    */
    <nav
      className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.mode}`}
      data-bs-theme={props.mode} // Using state value sent as prop
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
          </ul>
          <div className="navbar-nav" role="button" onClick={props.theme}>
            {/* Function sent by App.js as prop */}
            <span className="nav-link">Night Mode &#127769;</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
