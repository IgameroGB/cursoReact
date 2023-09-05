import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { formatNumberToEUR } from "../helpers";

const BudgetController = ({
    costsList,
    budget,
    setEditBudgetModal,
    setModalAnimation,
    genericModalResult,
    setGenericModal,
}) => {
    const [percentage, setPercentage] = useState(0);
    const [available, setAvailable] = useState(0);
    const [used, setUsed] = useState(0);

    const [progressbarColor, setProgressbarColor] = useState("");
    const [progressbarText, setProgressbarText] = useState("");

    const modifyHeaderData = () => {
        setProgressbarColor("#3b82f6");
        if (costsList.length != 0) {
            const totalUsed = costsList.reduce((total, cost) => {
                return cost.costCuantity + total;
            }, 0);
            const totalAvailable = budget - totalUsed;

            // Calculo porcentaje

            const percentageResult = (totalUsed * 100) / budget;

            const formatedPercentage = percentageResult.toFixed(2);

            setTimeout(() => {
                percentageResult == 100 && setProgressbarColor("#FFCC00");
                percentageResult > 100 && setProgressbarColor("#CF222E");

                setProgressbarText(`${formatedPercentage}% Gastado`);
                percentageResult > 100 && setProgressbarText("Te pasaste");

                setPercentage(percentageResult);
            }, 100);

            // percentageResult == 0 && setPercentage(percentage);

            setAvailable(totalAvailable);
            setUsed(totalUsed);
            return;
        }
        setUsed(0);
        setPercentage(0);
        setProgressbarText("0% Gastado");
        setAvailable(budget);
    };

    useEffect(() => {
        modifyHeaderData();
    }, [budget]);

    useEffect(() => {
        modifyHeaderData();
    }, [costsList]);

    const openResetAppModal = () => {
        setGenericModal(true);

        setTimeout(() => {
            setModalAnimation(true);
        }, 250);
    };

    const handleEditBudget = () => {
        setEditBudgetModal(true);

        setTimeout(() => {
            setModalAnimation(true);
        }, 250);
    };

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: `${progressbarColor}`,
                        textColor: `${progressbarColor}`,
                        trailColor: "#F5F5F5",
                    })}
                    value={percentage}
                    text={progressbarText}
                    // styles={{
                    //     path: { stroke: progressbarColor }, // Cambia el color de la barra de progreso
                    //     text: { fill: progressbarColor }, // Cambia el color del texto
                    // }}
                />
            </div>
            <div className="contenido-presupuesto">
                <button
                    className="reset-app"
                    type="button"
                    onClick={openResetAppModal}
                >
                    Resetear App
                </button>
                <p>
                    <span>Presupuesto: </span>{" "}
                    <span className="edit" onClick={handleEditBudget}>
                        {formatNumberToEUR(budget)}
                    </span>
                </p>

                <p>
                    <span>Disponible: </span>{" "}
                    <span
                        className={`${available < 0 ? "negativo" : "positivo"}`}
                    >
                        {formatNumberToEUR(available)}
                    </span>
                </p>

                <p>
                    <span>Gastado: </span> {formatNumberToEUR(used)}
                </p>
            </div>
        </div>
    );
};

export default BudgetController;
