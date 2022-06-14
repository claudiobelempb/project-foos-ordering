import { Footer } from './Footer';
import { Header } from './Header';

const LayoutHome = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export { LayoutHome };
