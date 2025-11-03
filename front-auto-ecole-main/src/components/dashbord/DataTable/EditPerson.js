import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

function EditPerson () {
  const URL="http://localhost:8000/person";
  const { id } = useParams()  // Récupérer l'id  depuis l'URL
  const [person, setperson] = useState({ // État local pour stocker les données de person à éditer
    cin: "",
    email: "",
    firstname: "",
    lastname: "",
    birthdate: "",
    phone: "",
    adress: "",
    username: "",
    role: "",
    password: "",
  });
  const history = useHistory();
  // useEffect s'exécute au montage du composant
  useEffect(() => {
    // Récupérer les données du person à modifier via son id
    axios.get(`${URL}/${id}`)
      .then(result => {
        console.log(result);
        setperson({ // Mettre à jour l'état 'personnel' avec les données reçues
          ...person,
          cin: result.data.cin,
          email: result.data.email,
          firstname: result.data.firstname,
          lastname: result.data.lastname,
          birthdate: result.data.birthdate,
          phone: result.data.phone,
          adress: result.data.adress,
          username: result.data.username,
          role: result.data.role,
          password: result.data.password,
        })
      })
      .catch(err => console.log(err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Envoi des nouvelles données au backend via une requête PUT
    axios.put(`${URL}/edit/${id}`, person)
      .then(() => {   
      history.push('/DashboardAdmin') // Redirection   
      })
  }

  return (
     
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit person</h3>
        <form className="row g-1" onSubmit={handleSubmit}>

          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
             Cin
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="cin"
              placeholder="Enter cin"
              value={person.cin}
              onChange={(e) =>
                setperson({ ...person, cin: e.target.value })
              }
            />
          </div>
          
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter email"
              autoComplete="off"
              value={person.email}
              onChange={(e) =>
                setperson({ ...person, email: e.target.value })
              }
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter password"
              autoComplete="off"
              value={person.password}
              onChange={(e) =>
                setperson({ ...person, password: e.target.value })
              }
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Firstname
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter firstname"
              autoComplete="off"
              value={person.firstname}
              onChange={(e) =>
                setperson({ ...person, firstname: e.target.value })
              }
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Lastname
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter lastname"
              autoComplete="off"
              value={person.lastname}
              onChange={(e) =>
                setperson({ ...person, lastname: e.target.value })
              }
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Birthdate
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="birthdate"
              autoComplete="off"
              value={person.birthdate}
              onChange={(e) =>
                setperson({ ...person, birthdate: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="phone"
              autoComplete="off"
              value={person.phone}
              onChange={(e) =>
                setperson({ ...person, phone: e.target.value })
              }
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Adress
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="adress"
              autoComplete="off"
              value={person.adress}
              onChange={(e) =>
                setperson({ ...person, adress: e.target.value })
              }
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="usename"
              autoComplete="off"
              value={person.username}
              onChange={(e) =>
                setperson({ ...person, username: e.target.value })
              }
            />
          </div>
          <br></br>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Edit person
            </button>
            
          </div>
          
        </form>
      </div>
    </div>
  
  )
}

export default EditPerson