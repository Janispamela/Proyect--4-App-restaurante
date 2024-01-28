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
