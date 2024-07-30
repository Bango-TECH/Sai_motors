import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pic from './images/swami.png';
import pic1 from './images/acc1.png';
import './Nav.css'; 

function Navv() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const closeNav = () => {
    setExpanded(false);
  };

  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#000000' }} expanded={expanded}>
      <Container>
        <Navbar.Brand href="#home" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
          <img src={pic} alt="Logo" width="50" style={{ marginRight: '2px' }} />
          <h6>Shri Swami Samarth Motors</h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggle} className="custom-toggler" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ backgroundColor: expanded ? '#000000' : 'transparent' }}
        >
          <Nav className="me-auto">
            <Link
              to="/Home"
              onClick={closeNav}
              className="nav-link-custom"
            >
              <h6><strong>Home</strong></h6>
            </Link>
            <NavDropdown
              title={
                <span style={{ color: '#ffffff' }}>
                  <strong>Vehicle-Category</strong>
                </span>
              }
              id="collapsible-nav-dropdown"
              className="nav-link-custom"
            >
              <NavDropdown.Item
                as={Link}
                to="/Pickup"
                onClick={closeNav}
                className="dropdown-item-custom"
              >
                Pickup / पिकअप
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/Four"
                onClick={closeNav}
                className="dropdown-item-custom"
              >
                Four Wheeler / फोर व्हिलर
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/Tract"
                onClick={closeNav}
                className="dropdown-item-custom"
              >
                Other / इतर
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link
              to="/Admin"
              onClick={closeNav}
              className="nav-link-custom"
            >
              <h5>
                Admin&nbsp; 
                <img src={pic1} width="40" alt="Admin Icon" />
                &nbsp;: &nbsp;
                <span style={{ color: 'black' }}>Sign-in</span>
              </h5>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navv;


// import React, { useState } from 'react';
// import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import pic from './images/swami.png';
// import pic1 from './images/acc1.png';
// import './Nav.css'; 

// function Navv() {
//   const [expanded, setExpanded] = useState(false);

//   const handleToggle = () => {
//     setExpanded(!expanded);
//   };

//   const closeNav = () => {
//     setExpanded(false);
//   };

//   return (
//     <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#000000' }} expanded={expanded}>
//       <Container>
//         <Navbar.Brand href="#home" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
//           <img src={pic} alt="Logo" width="40" style={{ marginRight: '2px' }} />
//           <h6>Shri Swami Samarth Motors</h6>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggle} className="custom-toggler" />
//         <Navbar.Collapse
//           id="responsive-navbar-nav"
//           style={{ backgroundColor: expanded ? '#000000' : 'transparent' }}
//         >
//           <Nav className="me-auto">
//             <Link
//               to="/Home"
//               onClick={closeNav}
//               style={{
//                 color: '#ffffff',
//                 backgroundColor: '#007bff',
//                 border: '4px outset #000',
//                 borderRadius: '0px',
//                 padding: '2px 16px',
//                 textDecoration: 'none',
//               }}
//             >
//               <h6><strong>Home</strong></h6>
//             </Link>
//             <NavDropdown
//               title={
//                 <span style={{ color: '#ffffff' }}>
//                   <strong>Vehicle-Category</strong>
//                 </span>
//               }
//               id="collapsible-nav-dropdown"
//               style={{
//                 color: '#ffffff',
//                 backgroundColor: '#007bff',
//                 border: '4px outset #000',
//                 borderRadius: '3px',
//                 padding: '4px 12px',
//                 textDecoration: 'none',
//                 cursor: 'pointer',
//                 margin: '5px 0'
//               }}
//             >
//               <NavDropdown.Item
//                 as={Link}
//                 to="/Pickup"
//                 onClick={closeNav}
//                 className="dropdown-item-custom"
//               >
//                 Pickup / पिकअप
//               </NavDropdown.Item>
//               <NavDropdown.Item
//                 as={Link}
//                 to="/Four"
//                 onClick={closeNav}
//                 className="dropdown-item-custom"
//               >
//                 Four Wheeler / फोर व्हिलर
//               </NavDropdown.Item>
//               <NavDropdown.Item
//                 as={Link}
//                 to="/Tract"
//                 onClick={closeNav}
//                 className="dropdown-item-custom"
//               >
//                 Other / इतर
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//           <Nav>
//             <Link
//               to="/Admin"
//               onClick={closeNav}
//               style={{ color: 'white', fontWeight: 900 }}
//             >
//               <h5 style={{
//                 color: '#ffffff',
//                 backgroundColor: '#007bff',
//                 border: '4px outset #000',
//                 borderRadius: '10px',
//                 padding: '4px 12px',
//                 textDecoration: 'none'
//               }}>
//                 Admin&nbsp; 
//                 <img src={pic1} width="40" alt="Admin Icon" />
//                 &nbsp;: &nbsp;
//                 <span style={{ color: 'black' }}>Sign-in</span>
//               </h5>
//             </Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Navv;
