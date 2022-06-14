import { LayoutHome } from '../../components/LayoutHome';

import './styles.scss';

const ContactPage = () => {
  return (
    <LayoutHome>
      <main className='container-fluid bg-light'>
        <div className='row h-100'>
          <div className='col-12 col-sm-12 col-md-6 contact__container d-none d-md-block'></div>
          <div className='col-12 col-sm-12 col-md-6'>
            <form className='text-secondary py-4 px-4'>
              <h1 className='display-4 text-black py-5'>Contact Us</h1>
              <div className='mb-3'>
                <label for='exampleFormControlInput1' className='form-label'>
                  Full Name
                </label>
                <input
                  type='text'
                  className='form-control bg-light border-top-0 border-start-0 border-end-0 rounded-0 border-2 text-secondary'
                  id='exampleFormControlInput1'
                  placeholder='Entrer full name...'
                />
              </div>
              <div className='mb-3'>
                <label for='exampleFormControlInput1' className='form-label'>
                  Email address
                </label>
                <input
                  type='email'
                  className='form-control bg-light border-top-0 border-start-0 border-end-0 rounded-0 border-2 text-secondary'
                  id='exampleFormControlInput1'
                  placeholder='Enter email...'
                />
              </div>
              <div className='mb-3'>
                <label for='exampleFormControlTextarea1' className='form-label'>
                  Message
                </label>
                <textarea
                  className='form-control bg-light border-top-0 border-start-0 border-end-0 rounded-0 border-2 text-secondary'
                  placeholder='Enter message...'
                  id='exampleFormControlTextarea1'
                  rows='3'
                ></textarea>
              </div>
              <div className='py-4'>
                <button className='btn btn-dark btn-lg'>Send message</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </LayoutHome>
  );
};

export default ContactPage;
