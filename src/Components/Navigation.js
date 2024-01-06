import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/text-editor">
                Editor
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Help
              </Link>
            </li>
          </ul>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="tooglelabel"
              onClick={props.onClick}
            />
            <input
              className="mx-3"
              type="color"
              value={props.color}
              onChange={props.changeHandler}
            />

            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="tooglelabel"
            >
              Enable {props.mode === "light" ? "dark" : "light"} mode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
