import { LayoutHome } from '../../components/LayoutHome';
import { ProductCard } from '../../components/ProductCard';
import { data } from '../../data/data';

const MenuPage = () => {
  return (
    <LayoutHome>
      <main className='container-fluid bg-light'>
        <div className='container '>
          <div className='row'>
            <div className='col'>
              <h1 className='display-4 text-center text-dark py-4'>Our Menu</h1>
            </div>
          </div>
          <div className='row g-3 py-4'>
            {data.map(product => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </main>
    </LayoutHome>
  );
};

export default MenuPage;
