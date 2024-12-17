
// import { Link } from 'react-router';
// import styled from 'styled-components';

// const Nav = styled.nav`
//   background-color: #333;
//   padding: 10px;
// `;

// const NavList = styled.ul`
//   display: flex;
//   list-style: none;
//   margin: 0;
//   padding: 0;
// `;

// const NavItem = styled.li`
//   margin-right: 20px;
// `;

// const NavLink = styled(Link)`
//   color: white;
//   text-decoration: none;
//   padding: 10px;
//   border-radius: 5px;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #555;
//   }
// `;

// const Navbar = () => {
//   return (
//     <Nav>
//       <NavList>
//         <NavItem>
//           <NavLink to="/">Home</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink to="/blogs">Blogs</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink to="/contact">Contact</NavLink>
//         </NavItem>
//       </NavList>
//     </Nav>
//   );
// };

// export default Navbar;


import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/market">Market</Link></li>
        <li><Link to="/ranking">Ranking</Link></li>
        <li><Link to="/wallet">Wallet</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
