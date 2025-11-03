import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
function EditCar () {
  const URL="http://localhost:8000/car";
  const { id } = useParams()  // Récupérer l'id  depuis l'URL
  const [car, setCar] = useState({ // État local pour stocker les données de car à éditer
    carcolor: "",
    registrationNb: "",
    brand: "",
    model: "",
    technical_visit_date: "",
    insurance_date: "",
  });
  const history = useHistory();
  // useEffect s'exécute au montage du composant
  useEffect(() => {
    // Récupérer les données du car à modifier via son id
    axios.get(`${URL}/${id}`)
      .then(result => {
        console.log(result);
        setCar({ // Mettre à jour l'état 'personnel' avec les données reçues
          ...car,
          carcolor: result.data.carcolor,
          registrationNb: result.data.registrationNb,
          brand: result.data.brand,
          model: result.data.model,
          technical_visit_date: result.data.technical_visit_date,
          insurance_date: result.data.insurance_date,
        })
      })
      .catch(err => console.log(err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Envoi des nouvelles données au backend via une requête PUT
    axios.put(`${URL}/edit/${id}`, car)
      .then(() => {   
      history.push('/DashboardAdmin') // Redirection   
      })
  }

  return (
     
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Car</h3>
        <form className="row g-1" onSubmit={handleSubmit}>

          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Registration Number
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter registrationNb"
              value={car.registrationNb}
              onChange={(e) =>
                setCar({ ...car, registrationNb: e.target.value })
              }
            />
          </div>
          
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Brand
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter Brand"
              autoComplete="off"
              value={car.brand}
              onChange={(e) =>
                setCar({ ...car, brand: e.target.value })
              }
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Model
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter model"
              autoComplete="off"
              value={car.model}
              onChange={(e) =>
                setCar({ ...car, model: e.target.value })
              }
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Color
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter color"
              autoComplete="off"
              value={car.carcolor}
              onChange={(e) =>
                setCar({ ...car, carcolor: e.target.value })
              }
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Technical visit date
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter date"
              autoComplete="off"
              value={car.technical_visit_date}
              onChange={(e) =>
                setCar({ ...car, technical_visit_date: e.target.value })
              }
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              insurance_date
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter insurance_date"
              autoComplete="off"
              value={car.insurance_date}
              onChange={(e) =>
                setCar({ ...car, insurance_date: e.target.value })
              }
            />
          </div>
          <br></br>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Edit car
            </button>
            
          </div>
          
        </form>
      </div>
    </div>
  
  )
}

export default EditCar