import { LayoutHome } from '../../components/LayoutHome';

import './styles.scss';

const AboutPage = () => {
  return (
    <LayoutHome>
      <main className='container-fluid bg-light p-0'>
        <div className='about__container'></div>
        <div className='container'>
          <div className='row'>
            <h1 className='display-1 text-center text-uppercase py-4 text-black'>
              About Us
            </h1>
            <p className='lead py-4 text-black'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              suscipit, illum possimus obcaecati, nesciunt blanditiis, deserunt
              rerum officia architecto dignissimos est dolore pariatur alias
              eos! Fugit, eum! Tenetur, velit minus?
            </p>
          </div>
        </div>
      </main>
    </LayoutHome>
  );
};

export default AboutPage;
