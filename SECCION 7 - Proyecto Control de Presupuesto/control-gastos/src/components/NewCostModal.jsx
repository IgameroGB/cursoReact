import { useState } from "react";
import Message from "./Message";
import CloseModal from "../img/cerrar.svg";

const NewCostModal = ({
    setModal,
    modalAnimation,
    setModalAnimation,
    saveCost
}) => {
    const [errorMsg, setErrorMsg] = useState("");

    const [costName, setCostName] = useState("");
    const [costCuantity, setCostCuantity] = useState("");
    const [costCategory, setCostCategory] = useState("");

    const closeModal = () => {
        setModalAnimation(false);

        setTimeout(() => {
            setModal(false);
        }, 500);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([costName, costCuantity, costCategory].includes("")) {
            setErrorMsg("Todos los campos son obligatorios");

            setTimeout(() => {
                setErrorMsg("");
            }, 3000);
            return;
        }
        saveCost({ costName, costCuantity, costCategory });
    };
    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CloseModal} alt="cerrar modal" onClick={closeModal} />
            </div>
            <form
                className={`formulario ${modalAnimation ? "animar" : "cerrar"}`}
                onSubmit={handleSubmit}
            >
                <legend>Nuevo gasto</legend>
                {errorMsg && <Message tipo="error">{errorMsg}</Message>}
                <div className="campo">
                    <label htmlFor="costName">Nombre Gasto</label>
                    <input
                        type="text"
                        name="costName"
                        id="costName"
                        placeholder="Añade el Nombre del Gasto"
                        value={costName}
                        onClick={(e) => {
                            setErrorMsg("");
                        }}
                        onChange={(e) => {
                            setCostName(e.target.value);
                        }}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="costCuantity">Cantidad Gasto</label>
                    <input
                        type="number"
                        name="costCuantity"
                        id="costCuantity"
                        placeholder="Añade la cantidad del gasto: ej. 300"
                        value={costCuantity}
                        onClick={(e) => {
                            setErrorMsg("");
                        }}
                        onChange={(e) => {
                            setCostCuantity(Number(e.target.value));
                        }}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="costCategory">Categoria</label>
                    <select
                        name="costCategory"
                        id="costCategory"
                        value={costCategory}
                        onClick={(e) => {
                            setErrorMsg("");
                        }}
                        onChange={(e) => {
                            setCostCategory(e.target.value);
                        }}
                    >
                        <option value="" disabled>
                            -- Seleccione una categoria --
                        </option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="hogar">Hogar</option>
                        <option value="varios">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input type="submit" value="Añadir Gasto" />
            </form>
        </div>
    );
};

export default NewCostModal;
