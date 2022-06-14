const ProductCard = ({ image, title, price }) => {
  return (
    <div className='col-sm-6 col-md-4 col-lg-3'>
      <div className='card shadow' style={{ height: '100%' }}>
        <img
          className='card-img-top img-fluid'
          style={{ height: '100%', width: '100%' }}
          src={image}
          alt=''
        />
        <div className='card-body text-black'>
          <h2 className='card-title fw-bold fs-4'>{title}</h2>
          <small className='card-title'>${price}</small>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
