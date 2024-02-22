import React from 'react';
import { ProductInfoProps } from '../types/types';

const ProductRow: React.FC<ProductInfoProps> = ({ product, onClick }) => {
  const {id, name, year} = product
  return (
    <tr style={{ backgroundColor: product.color, cursor: 'pointer' }} onClick={onClick}>
      <td className='list__tableData'>{id}</td>
      <td className='list__tableData'>{name}</td>
      <td className='list__tableData'>{year}</td>
    </tr>
  );
};

export default ProductRow;
