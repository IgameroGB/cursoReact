import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import ClientForm from "../components/ClientForm";
import Error from "../components/Error";
import { newClient } from "../data/Clientes";

export async function action({ request }) {
    const formData = await request.formData();

    //Dos maneras de recuperar datos de un formulario (JS)
    // console.log([...formData]);
    // const data = Object.fromEntries(formData);

    const data = Object.fromEntries(formData);

    const email = formData.get("email");

    // Validacion
    const errors = [];
    if (Object.values(data).includes("")) {
        errors.push("Todos los campos son obligatorios");
    }

    let regex = new RegExp(
        "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    );

    if (!regex.test(email)) {
        errors.push("El email no es válido");
    }

    // Retornar datos si hay errores
    if (Object.keys(errors).length) {
        // console.log("Hay errores");
        return errors;
    }

    // Se ejecutara si el formulario esta validado
    await newClient(data);

    return redirect("/"); // se usa en actions y loaders
}

function NewClient() {
    const errors = useActionData();
    const navigate = useNavigate();

    // console.log(errors?.length) // ? Optional Chaining. Permite acceder a X propiedad si el objeto existe

    // React Router DOM utilizad un metodo propio mara manejar peticiones
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Enviando...");
    // };
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
            <p className="mt-3">
                Rellena todos los campos para registrar un{" "}
                <span className="font-black text-blue-800">Nuevo Cliente</span>{" "}
            </p>

            <div className="flex justify-end">
                <button
                    className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
                    // onClick={() => navigate("/")}
                    onClick={() => navigate(-1)} // -1 Nos lleva a la pagina anterior (AUN SI ES EXTERNO, lleva estrictamente a la anterior pagina)
                >
                    Volver
                </button>
            </div>

            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
                {errors?.length &&
                    errors.map((error, i) => <Error key={i}>{error}</Error>)}
                <Form
                    method="post"
                    noValidate // Evita la validadcion HTML
                    // onSubmit={handleSubmit}
                >
                    <ClientForm />
                    <input
                        type="submit"
                        className="mt-5 w-full bg-blue-800 p-3 rounded-md uppercase font-bold text-white text-lg cursor-pointer hover:bg-green-600 transition duration-500"
                        value="Registrar Cliente"
                    />
                </Form>
            </div>
        </>
    );
}

export default NewClient;
