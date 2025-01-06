import { ArrowRight } from '@mui/icons-material'
import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import image1 from '../assets/images/image12.jpg'
import image2 from '../assets/images/image16.png'
import image3 from '../assets/images/image18.png'
import image4 from '../assets/images/image17.png'
import image5 from '../assets/images/image19.png'

const HomePage = () => {
  return (
    <div>
      <div>
         {/* Main Content */}
      <Container fluid className="mt-4 mb-4"> {/* Add mb-4 for bottom margin */}
        <Row>
          {/* Left Menu (Categories) */}
          <Col md={3} className="bg-gray-100 p-12">
            <ul className="list-none space-y-2">
              <li>
                <Link to="/womens-fashion" className="text-dark hover:underline">
                  Women's Fashion <ArrowRight />
                </Link>
              </li>
              <li>
                <Link to="/mens-fashion" className="text-dark hover:underline">
                  Men's Fashion <ArrowRight />
                </Link>
              </li>
              <li>
                <Link to="/electronics" className="text-dark hover:underline">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/home-lifestyle" className="text-dark hover:underline">
                  Home & Lifestyle
                </Link>
              </li>
              <li>
                <Link to="/medicine" className="text-dark hover:underline">
                  Medicine
                </Link>
              </li>
              <li>
                <Link to="/sports-outdoor" className="text-dark hover:underline">
                  Sports & Outdoor
                </Link>
              </li>
              <li>
                <Link to="/baby-toys" className="text-dark hover:underline">
                  Baby & Toys
                </Link>
              </li>
              <li>
                <Link to="/groceries-pets" className="text-dark hover:underline">
                  Groceries & Pets
                </Link>
              </li>
              <li>
                <Link to="/health-beauty" className="text-dark hover:underline">
                  Health & Beauty
                </Link>
              </li>
            </ul>
          </Col>

          {/* Right (Carousel) */}
          <Col md={9} className="pr-20">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 object-cover h-344"
                  src={image1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <a href="#" className="absolute top-0 left-0 m-2 underline-offset-1">Shop Now<ArrowRight /></a>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 object-cover h-344"
                  src={image2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <a href="#" className="absolute top-0 left-0 m-2">Shop Now<ArrowRight /></a>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 object-cover h-344"
                  src={image3}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <a href="#" className="absolute top-0 left-0 m-2">Shop Now<ArrowRight /></a>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 object-cover h-344"
                  src={image4}
                  alt="Fourth slide"
                />
                <Carousel.Caption>
                  <a href="#" className="absolute top-0 left-0 m-2">Shop Now<ArrowRight /></a>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 object-cover h-344"
                  src={image5}
                  alt="Fifth slide"
                />
                <Carousel.Caption>
                  <a href="#" className="absolute top-0 left-0 m-2">Shop Now<ArrowRight /></a>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  )
}

export default HomePage
