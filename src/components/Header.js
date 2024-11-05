import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import CSS for styling

const Header = () => {
    return (
      <>
        <header>
            <nav className="nav-container">
                <div className="button-group">
                    <Link to="/"><button>Home</button></Link>
                    <div className="vertical-divider"></div>
                    <Link to="/units"><button>Units</button></Link>
                    <div className="vertical-divider"></div>
                    <Link to="/something"><button>Something</button></Link>
                </div>
                <div className="right">
                    <Link to="/login"><button>Login</button></Link>
                </div>
            </nav>
        </header>
        <hr className="header-divider" />
      </>
    );
};

export default Header;
