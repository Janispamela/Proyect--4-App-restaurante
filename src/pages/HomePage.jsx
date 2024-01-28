import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const HomePage = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const bookingData = {
        Name: data.Name,
        Email: data.Email,
        Number: data.Number,
        Comments: data.Comments,
      };

      const table = collection(db, "data");
      await addDoc(table, bookingData);

      console.log("Datos enviados correctamente a Firebase:", bookingData);
    } catch (error) {
      console.error("Error al enviar datos a Firebase:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadingData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

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
 
        <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card">
          <img src="src\assets\img\36303033_1.jpg" className="card-img-top" alt="Menu" />
          
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="src\assets\img\36663367_1.png" className="card-img-top" alt="Best Sellers" />
          
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="src\assets\img\36663370_1.png" className="card-img-top" alt="Food options" />
          
        </div>
      </div>
      <div className="col">
      </div>
    </div>

    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card">
          <img src="src\assets\img\36303040_1.jpg" className="card-img-top" alt="Love and Thunder cocktail" />
          
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="src\assets\img\36303036_1.jpg" className="card-img-top" alt="Seoul Station cocktail" />
          
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="src\assets\img\36303042_1.jpg" className="card-img-top" alt="Pretty Woman cocktail" />
          
        </div>
      </div>
      <div className="col">
      </div>
    </div>
  
        <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Visit us</h5>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            title="Google Map"
            className="embed-responsive-item"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.7096812082655!2d121.05236207362101!3d14.558587478106828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9cd1f2f2de5%3A0xe69a67dc496fade2!2sYes%20Please%20at%20The%20Palace!5e0!3m2!1ses-419!2sph!4v1706466798717!5m2!1ses-419!2sph"
            width="100%"
            height="300px"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="card-text">38th St. Uptown, 11th Ave, Taguig, Metro Manila</p>
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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      {...register('Name', {
                        required: true,
                      })}
                    />
                  </div>
  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      {...register('Email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: 'Invalid email address'
                        },
                      })}
                    />
                    {errors.Email && (
                      <p className="text-danger">{errors.Email.message}</p>
                    )}
                  </div>
  
                  <div className="mb-3">
                    <label htmlFor="number" className="form-label">Contact Number:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="number"
                      {...register('Number', {
                        required: true,
                      })}
                    />
                  </div>
  
                  <div className="mb-3">
                    <label htmlFor="comments" className="form-label">Comments:</label>
                    <textarea
                      className="form-control"
                      id="comments"
                      {...register('Comments', {
                        required: true,
                      })}
                    />
                  </div>
  
                  <div style={{ marginTop: '10px' }}>
                    <button type="submit" className="btn btn-primary" onClick={loadingData}>
                      {loading ? "Booking now..." : "Book Now"}
                    </button>
                  </div>
                </form>
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
