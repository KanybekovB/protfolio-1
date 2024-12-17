import { Link } from 'react-router';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem><NavLink to="/">Home</NavLink></NavItem>
        <NavItem><NavLink to="/market">Marketplace</NavLink></NavItem>
        <NavItem><NavLink to="/ranking">Ranking</NavLink></NavItem>
        <NavItem><NavLink to="/wallet">Connect a wallet</NavLink></NavItem>
      </NavList>
      <h1>Your Company</h1>
    </Nav>
  );
};

export default Navbar;
