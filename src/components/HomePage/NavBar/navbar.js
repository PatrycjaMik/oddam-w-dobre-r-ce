import React from 'react';
import { Link } from 'react-router';
import '.NavBar/NavBar.scss';

const NavBar = () => {
  return (
    <Navbar>
  <Container>
      <Nav className="nav-container">
        <div className="logins">
            <Link to="login">Zaloguj</Link>
            <Link to="account">Załóż konto</Link>
        </div>
        <NavLow title="LowPart" id="low-part-section">
        <div className="low-part">
        <Link to="start">Start</Link>
        <Link to="ococho">O co chodzi?</Link>
        <Link to="onas">O nas</Link>
        <Link to="fundacje">Fundacja i organizacje</Link>
        <Link to="kontakt">Kontakt</Link>
        </div>
        </NavLow>
      </Nav>
  </Container>
</Navbar>
  );
};

export default Link;
export default NavBar;