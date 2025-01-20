import React, { useEffect } from 'react';
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
  const token = localStorage.getItem('token'); 
  const dispatch = useDispatch();

  // Accessing products, loading, and error states from Redux store
  const { products = [], error = null, loading = false } = useSelector((state) => state.product || {});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://bade-2401-4900-4e24-1cd2-cd13-ad8-fbe-cc9d.ngrok-free.app/api/products/allproducts', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          console.error(`HTTP Error: ${response.status} ${response.statusText}`);
          return;
        }
  
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Network or Fetch Error:', error);
      }
    };
  
    fetchData();
  }, []);
  
  

  useEffect(() => {
    // Dispatch action to fetch products on component mount
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
              <li><Link to="/womens-fashion" className="text-dark hover:underline">Women's Fashion <ArrowRight /></Link></li>
              <li><Link to="/mens-fashion" className="text-dark hover:underline">Men's Fashion <ArrowRight /></Link></li>
              <li><Link to="/electronics" className="text-dark hover:underline">Electronics</Link></li>
              <li><Link to="/home-lifestyle" className="text-dark hover:underline">Home & Lifestyle</Link></li>
              <li><Link to="/medicine" className="text-dark hover:underline">Medicine</Link></li>
              <li><Link to="/sports-outdoor" className="text-dark hover:underline">Sports & Outdoor</Link></li>
              <li><Link to="/baby-toys" className="text-dark hover:underline">Baby & Toys</Link></li>
              <li><Link to="/groceries-pets" className="text-dark hover:underline">Groceries & Pets</Link></li>
              <li><Link to="/health-beauty" className="text-dark hover:underline">Health & Beauty</Link></li>
            </ul>
          </Col>

          {/* Right Section (Carousel) */}
          <Col md={9} className="pr-20">
            <Carousel>
              {/* Carousel Items */}
              <Carousel.Item>
                <img className="d-block w-100 object-cover h-344" src={image1} alt="First slide" />
                <Carousel.Caption>
                  <a href="#" className="absolute top-0 left-0 m-2 underline-offset-1">Shop Now<ArrowRight /></a>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 object-cover h-344" src={image2} alt="Second slide" />
                <Carousel.Caption>
                  <a href="#" className="absolute top-0 left-0 m-2">Shop Now<ArrowRight /></a>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 object-cover h-344" src={image3} alt="First slide" />
                <Carousel.Caption>
                  <a href="#" className="absolute top-0 left-0 m-2 underline-offset-1">Shop Now<ArrowRight /></a>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 object-cover h-344" src={image4} alt="First slide" />
                <Carousel.Caption>
                  <a href="#" className="absolute top-0 left-0 m-2 underline-offset-1">Shop Now<ArrowRight /></a>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 object-cover h-344" src={image5} alt="First slide" />
                <Carousel.Caption>
                  <a href="#" className="absolute top-0 left-0 m-2 underline-offset-1">Shop Now<ArrowRight /></a>
                </Carousel.Caption>
              </Carousel.Item>
              {/* Add more carousel items if needed */}
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
          ) : (
            // Ensure products is an array before calling .map()
            Array.isArray(products) && products.length > 0 ? (
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
            )
          )}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
