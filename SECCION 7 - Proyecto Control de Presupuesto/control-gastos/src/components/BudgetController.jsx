import { useState, useEffect } from "react";

import { formatNumberToEUR } from "../helpers";

const BudgetController = ({ costsList, budget }) => {
    const [available, setAvailable] = useState(0);
    const [used, setUsed] = useState(0);

    useEffect(() => {
        if (costsList.length != 0) {
            const totalUsed = costsList.reduce((total, cost) => {
                return cost.costCuantity + total;
            }, 0);
            const totalAvailable = budget - totalUsed;
            setAvailable(totalAvailable);
            setUsed(totalUsed);
            return;
        }

        setAvailable(budget);
    }, [costsList]);
    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <p>Grafica aqui</p>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> {formatNumberToEUR(budget)}
                </p>

                <p>
                    <span>Disponible: </span> {formatNumberToEUR(available)}
                </p>

                <p>
                    <span>Gastado: </span> {formatNumberToEUR(used)}
                </p>
            </div>
        </div>
    );
};

export default BudgetController;
