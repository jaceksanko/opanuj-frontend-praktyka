import { useGetProductsQuery } from '../services/productsApi';
import Product from './Product';

export const Products = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  if (isLoading)
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  if (isError) return <div>Error</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
      {products?.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
};
