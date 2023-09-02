import { useState } from "react";
import Message from "./Message";

const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {
    const [msg, setMsg] = useState("");

    const handleBudget = (e) => {
        e.preventDefault();

        if (!budget || budget <= 0) {
            // setMsg(`'${budget}' no es un presupuesto valido`);
            setMsg("Añade un presupuesto VALIDO");
            return;
        }

        setMsg(""); // Reiniciamos mensaje
        setIsValidBudget(true);
    };
    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form className="formulario" onSubmit={handleBudget}>
                <div className="campo">
                    <label htmlFor="budget">Definir Presupuesto</label>
                    <input
                        className="nuevo-presupuesto"
                        type="number"
                        name="budget"
                        id="budget"
                        placeholder="Añade tu presupuesto"
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))}
                    />
                </div>
                <input type="submit" value="Añadir" />
                {msg && <Message tipo="error">{msg}</Message>}
            </form>
        </div>
    );
};

export default NewBudget;
