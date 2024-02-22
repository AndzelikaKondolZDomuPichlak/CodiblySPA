export interface Product {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface ProductInfoProps {
  product: Product;
  onClose?: () => void;
  onClick?: () => void;
}

export interface ProductStoreState {
  items: Product[];
  totalPages: number;
  loading: boolean;
  error: string | null;
  selectedProduct: Product | null;
  fetchProducts: (page: number) => Promise<void>;
  fetchProductById: (id: string) => Promise<void>;
  setSelectedProduct: (product: Product | null) => void;
  clearError: () => void;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface FilterInputProps {
  onFilterChange: (value: number) => void;
  totalItems: number;
}
