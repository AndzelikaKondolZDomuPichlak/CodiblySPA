import ProductList from './components/ProductList';
import ProductDetailsModal from './components/ProductDetailsModal';
import useProductStore from './store/useProductStore';

function App() {
  const { selectedProduct, setSelectedProduct } = useProductStore();

  return (
    <main className='list'>
      <div className='list__container'>
        <h1 className='list__title'>Products list</h1>
        <ProductList />
        {selectedProduct && (
          <ProductDetailsModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </main>
  );
}

export default App;
