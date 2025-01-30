import React, { useEffect } from "react";
import { Navbar, Nav, Form, Container } from "react-bootstrap";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchproductsrequest } from "../../features/product/productActions";
import { userlogoutdata } from "../../features/user/userActions";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data = {} } = useSelector((state) => state.users); // Access user state
  const onclickcart = () => {
    navigate('/login'); // Path must match router definition
  };

  const location = useLocation();

  // Check if the current page is '/login' or '/signup' to hide icons
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  useEffect(() => {
    dispatch(fetchproductsrequest());
  }, [dispatch]);

  // Logout handler
  const handleLogout = () => {
    dispatch(userlogoutdata()); // Clear user state in Redux
    navigate("/login"); // Navigate to login page
  };

  return (
    <div>

        {/* Announcement Bar */}
      
      {
      <div className="bg-black text-white py-2 d-flex justify-content-between align-items-center px-3">

        <div className="text-center flex-grow-1">
          <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </span>
          <a
            href="https://example.com"
            className="text-decoration-underline text-white ms-2"
            >
            Shop Now
          </a>
        </div>
        <div className="d-flex align-items-center ms-3">
          <select className="bg-black text-white border-0">
            <option value="en">English</option>
            <option value="te">Telugu</option>
          </select>
        </div>
      </div>
          }

      {/* Navbar */}
      <Navbar bg="white" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#" className="text-dark fw-bold">
            Light Up
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/" className="text-dark">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Cartpage" className="text-dark">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-dark">
                Contact
              </Nav.Link>

              {/* Conditional Rendering for Signup/Logout */}
              {data.email ? (
                // If user is logged in, show Logout
                <Nav.Link onClick={handleLogout} className="text-dark">
                  Logout
                </Nav.Link>
              ) : (
                // If user is not logged in, show Signup
                <Nav.Link as={Link} to="/signup" className="text-dark">
                  Signup
                </Nav.Link>
              )}
            </Nav>
            <Form className="d-flex position-relative me-3">
              <Form.Control
                type="text"
                placeholder="What are you looking for?"
                className="form-control"
                style={{ width: "300px" }}
              />
              <SearchIcon
                className="position-absolute top-50 translate-middle-y text-muted"
                style={{ right: "10px", cursor: "pointer" }}
              />
            </Form>

            {/* Conditionally render icons */}
            {!isAuthPage && (
              <div className="d-flex align-items-center">
                <FavoriteBorderIcon
                  className="text-dark me-3"
                  style={{ cursor: "pointer" }}
                />
<ShoppingCartIcon
  className="text-dark"
  style={{ cursor: "pointer" }}
  onClick={()=>{navigate("/cartpage")}}
/>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />

      <Footer />
    </div>
  );
};

export default Header;
