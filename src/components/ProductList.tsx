import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProductRow from './ProductRow';
import Pagination from './Pagination';
import FilterInput from './FilterInput';
import useProductStore from '../store/useProductStore';
import { Product } from '../types/types';

const ProductList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const page = parseInt(searchParams.get('page') || '1', 10);
  const totalItems = 12;

  const { items, totalPages, loading, error, fetchProducts, fetchProductById, clearError, setSelectedProduct } = useProductStore();
  
  useEffect(() => {
    if (id) {
      fetchProductById(id);
    } else {
      fetchProducts(page);
    }
  }, [id, page, fetchProductById, fetchProducts]);

  const handleFilterChange = (newId: number) => {
    navigate(`/?id=${newId}&page=1`);
  };

  const handlePageChange = (newPage: number) => {
    navigate(`/?page=${newPage}${id ? `&id=${id}` : ''}`);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleReset = () => {
    navigate('/');

    if (error) {
      clearError()
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) {
    return (
      <div>
        <p>Error: Could not find the product or: {error}</p>
        <button className='list__button' onClick={handleReset}>Clear Error</button>
      </div>
    );
  }

  return (
    <>
      <div className='list__inputWrapper'>
        <FilterInput onFilterChange={handleFilterChange} totalItems={totalItems} />
        {id && <button className='list__button' onClick={handleReset}>Clear</button>}
      </div>
      <table className='list__table'>
        <thead>
          <tr>
            <th className='list__tableHeader'>Id</th>
            <th className='list__tableHeader'>Name</th>
            <th className='list__tableHeader'>Year</th>
          </tr>
        </thead>
        <tbody>
        {items.map((item) => (
          <ProductRow key={item.id} product={item} onClick={() => handleProductClick(item)} />
        ))}
        </tbody>
      </table>
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
    </>
  );
};


export default ProductList;
