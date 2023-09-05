import { useState, useEffect } from "react";
import CloseModal from "../img/cerrar.svg";

import { formatNumberToEUR } from "../helpers";

const EditBudgetModal = ({
    setEditBudgetModal,
    modalAnimation,
    setModalAnimation,
    budget,
    setBudget,
    newBudget,
    setNewBudget,
}) => {
    const closeModal = () => {
        setModalAnimation(false);

        setTimeout(() => {
            setEditBudgetModal(false);
        }, 500);
    };

    const handleSubmit = (e) => {
        setBudget(Number(newBudget));
        e.preventDefault();
        closeModal();
    };

    return (
        <div
            className={`modal-flotante ${modalAnimation ? "animar" : "cerrar"}`}
        >
            <div className="cuerpo-modal">
                <div className="cerrar-modal">
                    <img
                        src={CloseModal}
                        alt="cerrar modal"
                        onClick={() => closeModal()}
                    />
                </div>
                <form
                    className={`formulario ${modalAnimation && "animar"}`}
                    onSubmit={handleSubmit}
                >
                    <legend>Editar presupuesto</legend>

                    <div className="campo">
                        <label htmlFor="budget">Nuevo Presupuesto</label>
                        <input
                            type="number"
                            name="budget"
                            id="budget"
                            placeholder="Añade el Nuevo Presupuesto"
                            value={newBudget}
                            onChange={(e) => {
                                setNewBudget(e.target.value);
                            }}
                        />
                    </div>

                    <input type="submit" value="Editar Presupuesto" />
                </form>
            </div>
        </div>
    );
};

export default EditBudgetModal;
