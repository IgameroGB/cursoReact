const Patient = () => {
  return (
    <div className="bg-white shadow-md rounded-xl py-10 px-5 mb-3 w-11/12 m-auto">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">Iván Gamero</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">
          ivan.gamero.olivares@gmail.com
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de alta: {""}
        <span className="font-normal normal-case">21/08/2023</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {""}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure pariatur
          provident quisquam ut non illum similique debitis ducimus voluptate
          animi corrupti dignissimos, mollitia dolor fugit, repellendus totam
          impedit quo. Non.
        </span>
      </p>
    </div>
  );
};

export default Patient;
