import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowRight } from '@mui/icons-material';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchproductsrequest } from '../features/product/productActions';
import image1 from '../assets/images/image12.jpg';
import image2 from '../assets/images/image16.png';
import image3 from '../assets/images/image18.png';
import image4 from '../assets/images/image17.png';
import image5 from '../assets/images/image19.png';

const HomePage = () => {
  const dispatch = useDispatch();
  const [userResponse, setUserResponse] = useState(null);

  // Accessing products, loading, and error states from Redux store
  const { products = [], error = null, loading = false } = useSelector((state) => state.product || {});

  // Fetching user data on mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('http://192.168.1.9:3000/api/users/all');
        const data = await res.json();
        setUserResponse(data);
        console.log(data);
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };
    
    
    // Fetch products
    dispatch(fetchproductsrequest());
  }, [dispatch]);
  

  return (
    <div>
      {/* Main Content */}
      <Container fluid className="mt-4 mb-4">
        <Row>
          {/* Left Menu (Categories) */}
          <Col md={3} className="bg-gray-100 p-12">
            <ul className="list-none space-y-2">
              {/* Category Links */}
              {[
                { label: "Women's Fashion", path: '/womens-fashion' },
                { label: "Men's Fashion", path: '/mens-fashion' },
                { label: 'Electronics', path: '/electronics' },
                { label: 'Home & Lifestyle', path: '/home-lifestyle' },
                { label: 'Medicine', path: '/medicine' },
                { label: 'Sports & Outdoor', path: '/sports-outdoor' },
                { label: 'Baby & Toys', path: '/baby-toys' },
                { label: 'Groceries & Pets', path: '/groceries-pets' },
                { label: 'Health & Beauty', path: '/health-beauty' },
              ].map((category, index) => (
                <li key={index}>
                  <Link to={category.path} className="text-dark hover:underline">
                    {category.label} <ArrowRight />
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Right Section (Carousel) */}
          <Col md={9} className="pr-20">
            <Carousel>
              {[image1, image2, image3, image4, image5].map((image, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100 object-cover h-344" src={image} alt={`Slide ${index + 1}`} />
                  <Carousel.Caption>
                    <a href="#" className="absolute top-0 left-0 m-2 underline-offset-1">
                      Shop Now <ArrowRight />
                    </a>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>

        {/* Products Display Section */}
        <Row className="mt-4">
          {loading ? (
            <Col md={12} className="text-center">
              <p>Loading products...</p>
            </Col>
          ) : error ? (
            <Col md={12} className="text-center">
              <p>{error}</p>
            </Col>
          ) : products.length > 0 ? (
            products.map((product) => (
              <Col key={product.id} md={3} className="mb-4">
                <div className="product-card">
                  <img
                    src={product.image_url} // Ensure the correct image URL path
                    alt={product.name}
                    className="w-100"
                  />
                  <h5>{product.name}</h5>
                  <p>{product.description}</p>
                  <p>Price: ₹{product.price}</p> {/* Display product price */}
                  <Link to={`/product/${product.id}`} className="btn btn-primary">
                    View Product
                  </Link>
                </div>
              </Col>
            ))
          ) : (
            <Col md={12} className="text-center">
              <p>No products available.</p>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
