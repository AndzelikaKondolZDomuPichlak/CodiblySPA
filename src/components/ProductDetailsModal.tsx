import React from 'react';
import { ProductInfoProps } from '../types/types';

const ProductDetailsModal: React.FC<ProductInfoProps> = ({ product, onClose }) => {
  if (!product) return null;
  const {id, name, year, color, pantone_value} = product
  return (
    <div className='list__modalBackdrop'>
      <div className='list__modalContent'>
        <h2 className='list__titleModal'>Product Details</h2>
        <p>ID: {id}</p>
        <p>Name: {name}</p>
        <p>Year: {year}</p>
        <p>Color: {color}</p>
        <p>Pantone value: {pantone_value}</p>
        <button className='list__button' onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
