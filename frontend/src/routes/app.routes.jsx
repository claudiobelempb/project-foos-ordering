import { useRoutes } from 'react-router-dom';

import NotFoundPage from '../pages/404';
import AboutPage from '../pages/About';
import ContactPage from '../pages/Contact';
import HomePage from '../pages/Home';
import MenuPage from '../pages/Menu';

const AppRoutes = () => {
  return useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/menu', element: <MenuPage /> },
    { path: '/about', element: <AboutPage /> },
    { path: '/contact', element: <ContactPage /> },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ]);
};

export { AppRoutes };
