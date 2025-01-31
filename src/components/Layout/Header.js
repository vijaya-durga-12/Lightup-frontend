import React, { useState, useEffect } from "react";
import { Navbar, Nav, Form, Container } from "react-bootstrap";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchproductsrequest, searchquryproduct } from "../../features/product/productActions";
import { userlogoutdata } from "../../features/user/userActions";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const { data = {} } = useSelector((state) => state.users);
  const location = useLocation();

  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  useEffect(() => {
    dispatch(fetchproductsrequest());
  }, [dispatch]);

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchQuery.length >= 3) {
      navigate('/searchpage');
      dispatch(searchquryproduct(searchQuery)); // Pass searchQuery directly
    } else {
      alert("Please enter at least 3 characters to search.");
    }
  };

  const handleLogout = () => {
    dispatch(userlogoutdata());
    navigate("/login");
  };

  return (
    <div>
      <div className="bg-black text-white py-2 d-flex justify-content-between align-items-center px-3">
        <div className="text-center flex-grow-1">
          <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </span>
          <a href="https://example.com" className="text-decoration-underline text-white ms-2">
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

              {data.email ? (
                <Nav.Link onClick={handleLogout} className="text-dark">
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/signup" className="text-dark">
                  Signup
                </Nav.Link>
              )}
            </Nav>

            <Form className="d-flex position-relative me-3" onSubmit={handleSearch}>
              <Form.Control
                type="text"
                placeholder="What are you looking for?"
                className="form-control"
                style={{ width: "300px" }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <SearchIcon
                className="position-absolute top-50 translate-middle-y text-muted"
                style={{ right: "10px", cursor: "pointer" }}
                onClick={handleSearch}
              />
            </Form>

            {!isAuthPage && (
              <div className="d-flex align-items-center">
                <FavoriteBorderIcon
                  className="text-dark me-3"
                  style={{ cursor: "pointer" }}
                />
                <ShoppingCartIcon
                  className="text-dark"
                  style={{ cursor: "pointer" }}
                  onClick={() => { navigate("/cartpage"); }}
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
