// rfce -> estructura basica
/* 
function Form() {
   return (
     <div>Form</div>
   )
 }

export default Form
*/

// rafce -> estructura basica con arrow funct

import { useState, useEffect } from "react";

const Form = () => {
  const [name, setName] = useState("");
  // nombre variable, metodo setter, valor inicial como parametro en funcion useState
  // setName('Iván') // ERROR

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Adminístralos</span>
      </p>
      <form className="bg-white shadow-md rounded-xl py-10 px-5 mb-10 w-11/12 m-auto">
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="pet-name"
          >
            Nombre Mascota
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            name="pet-name"
            id="pet-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre de la Mascota"
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="pet-owner"
          >
            Nombre Propietario
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            name="pet-owner"
            id="pet-owner"
            placeholder="Nombre del Propietario"
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="owner-email"
          >
            Email
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            name="owner-email"
            id="owner-email"
            placeholder="Email contacto Propietario"
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="register-date"
          >
            Fecha Alta
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            name="register-date"
            id="register-date"
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="pet-symptoms"
          >
            Síntomas
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md resize-none"
            name="pet-symptoms"
            rows="3"
            id="pet-symptoms"
            placeholder="Describe los síntomas de tu mascota"
          />
        </div>
        <input
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-green-600 duration-500 ease-in-out cursor-pointer"
          type="submit"
          value="Añadir Paciente"
        />
      </form>
    </div>
  );
};

export default Form;
