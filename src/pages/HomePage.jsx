const HomePage = () => {
  return (
    <>
      <header className="row col">
        <h1>JUST SAY YES</h1>
      </header>
      <main className="row">
        <article className="col">
          <div className="card mb-3">
  <div className="card-body">
    <h5 className="card-title">The Palace</h5>
    <p className="card-text">Yes, Please is a dinner & dive bar that is known for it’s strong signature cocktail line, chill-house music, delicious food and the 90’s-vibe Instagram-worthy interiors.</p>
    <p className="card-text"><small className="text-body-secondary">The answer here is always YES.</small></p>
  </div>
  <img src="src\assets\img\YP5.jpg" className="card-img-bottom" alt="The Palace" />
</div>

<div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Visit us</h5>
        <p className="card-text">38th St. Uptown, 11th Ave, Taguig, Metro Manila</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Booking Request</h5>
        <p className="card-text">
        Yes Please is open daily, 6pm till late.
        </p>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">Name:</label>
           <input type="text" id="inputName" className="form-control" />   
        </div>

        <div>
          <label htmlFor="inputEmail" className="form-label">Email:</label>
           <input type="email" id="inputEmail" className="form-control" />   
        </div>

        <div>
          <label htmlFor="inputPhone" className="form-label">Contact Number:</label>
           <input type="tel" id="inputPhone" className="form-control" />   
        </div>

        <div>
          <label htmlFor="inputComments" className="form-label">Comments:</label>
           <input type="text" id="inputComments" className="form-control" />   
        </div>

        <div style={{ marginTop: '10px' }}>
        <a href="#" className="btn btn-primary">Book now</a>
        </div>
      </div>
    </div>
  </div>
</div>

        </article>
      </main>
    </>
  );
};

export default HomePage;
