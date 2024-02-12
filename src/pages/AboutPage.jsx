import Header from '../components/Header';

const AboutPage = () => {
  return (
    <>
      <Header title="Experience the Philippines' top nightlife venue." />
      <main className="row">
      <article className="col">
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">The Palace</h5>
            <p className="card-text">The Palace Manila, founded in 2014, has remained the top nightlife destination in the Philippines, located in the heart of BGC, The Palace is the biggest integrated nightlife entertainment complex in the country.</p>
            <p className="card-text"><small className="text-body-secondary">With 5 distinct establishments: Xylo, The Island, Revel, Yes Please, and Clubhouse.</small></p>
          </div>
            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://i0.wp.com/thepalacemanila.com/wp-content/uploads/2022/05/YES-PLEASE6.jpeg?ssl=1" className="d-block w-100" alt="Yes,please" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>All signs point to yes</h5>
                    <p>Yes, Please: Elevating the cocktail bar experience with delicious dining, and a lively atmosphere with DJs.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://i0.wp.com/thepalacemanila.com/wp-content/uploads/2022/05/DSC_1975-1.jpeg?ssl=1" className="d-block w-100" alt="The Island" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Go to the Island</h5>
                    <p>Enjoy dinner and drinks poolside while partying with your friends to the beats of the top djs.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://i0.wp.com/thepalacemanila.com/wp-content/uploads/2022/09/Xylo4.jpg?ssl=1" className="d-block w-100" alt="Xylo" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>A night like no other</h5>
                    <p>Party at Xylo with internationally renowned DJs and top local talents, country’s #1 nightclub.</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>

        </div>
        </article>
    </main>
  </>
    );
};

export default AboutPage;
