import React from 'react';
import { useSelector } from 'react-redux';

const ProductDetailPage = () => {
  const {selectedProduct=[]} = useSelector((state) => state.products || {});
console.log(selectedProduct.id)
  console.log('Selected Product:', selectedProduct);

  // Check if selectedProduct is valid
  if (!selectedProduct || Object.keys(selectedProduct).length === 0) {
    return <div>No product selected!</div>;
  }

  return (
    <div>
      
     </div>
  );
};

export default ProductDetailPage;
