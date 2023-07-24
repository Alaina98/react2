import logo from './logo.svg';
import './App.css';
//Add this Here
import { Link, Outlet } from 'react-router-dom'
//Arabic bootstrap

function App() {
  return (
    <>
   

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/contact">contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Images">Image</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    <Outlet />
  </>
  );
}

export default App;
