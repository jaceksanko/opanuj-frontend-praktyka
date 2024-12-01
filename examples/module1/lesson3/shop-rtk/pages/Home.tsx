import { Products } from '../components/Products';

const Home = () => {
  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            Explore Our Products
          </h1>
          <Products />
        </div>
      </section>
    </div>
  );
};

export default Home;
