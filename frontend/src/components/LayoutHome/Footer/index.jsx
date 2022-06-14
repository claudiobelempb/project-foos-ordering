import { Link } from 'react-router-dom';

import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='container'>
      <div className='row'>
        <div className='col'>
          <ul className='d-flex justify-content-center align-items-center py-2'>
            <li className='fs-1 px-2'>
              <Link to={'/'}>
                <FaFacebook className='text-light' />
              </Link>
            </li>
            <li className='fs-1 px-2'>
              <Link to={'/'}>
                <FaInstagram className='text-light' />
              </Link>
            </li>
            <li className='fs-1 px-2'>
              <Link to={'/'}>
                <FaYoutube className='text-light' />
              </Link>
            </li>
            <li className='fs-1 px-2'>
              <Link to={'/'}>
                <FaTwitter className='text-light' />
              </Link>
            </li>
          </ul>
          <p className='lead text-center'>&copy; 2022 indianfood.com</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
