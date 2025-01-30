import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const CartPage = () => {
  const { cartProduct = [] } = useSelector((state) => state.cart);

  return (
    <Container className="mt-4">
      <h1 className="text-center">Shopping Cart</h1>
<h2>{cartProduct.id}</h2>
<h2>{cartProduct.description}</h2>

      
    </Container>
  );
};

export default CartPage;
