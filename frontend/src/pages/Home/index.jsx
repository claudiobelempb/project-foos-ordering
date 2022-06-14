import { Link } from 'react-router-dom';
import { LayoutHome } from '../../components/LayoutHome';

import './styles.scss';

const HomePage = () => {
  return (
    <LayoutHome>
      <main className='container-fluid home__container'>
        <div className='container'>
          <div className='row'>
            <div className='col d-flex justify-content-center flex-column'>
              <div className='d-sm-block d-lg-none bg-black p-3 py-5 rounded-3'>
                <h1 className='display-1 fw-bold text-light'>Food Corner</h1>
                <p className='lead text-light fs-2'>INDIAN FOOD AT A CLICK.</p>
                <Link to={'/menu'}>
                  <button className='btn btn-dark btn-lg'>Order Now</button>
                </Link>
              </div>
              <div className='d-none d-lg-block d-sm-none'>
                <h1 className='display-1 fw-bold text-dark'>Food Corner</h1>
                <p className='lead text-dark fs-2'>INDIAN FOOD AT A CLICK.</p>
                <Link to={'/menu'}>
                  <button className='btn btn-dark btn-lg'>Order Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutHome>
  );
};

export default HomePage;
