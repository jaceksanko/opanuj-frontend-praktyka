import { createContext, useEffect, useState } from 'react';
import type { Product } from '../types/Product';
import { useParams } from 'react-router-dom';

type ProductContextType = {
  product: Product | undefined;
};

export const ProductContext = createContext<ProductContextType>({
  product: undefined,
});

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${id}`
      );
      const data = await response.json();
      setProduct(data);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
