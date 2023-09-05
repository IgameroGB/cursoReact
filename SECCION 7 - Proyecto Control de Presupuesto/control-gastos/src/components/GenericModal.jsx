import { useState, useEffect } from "react";
import CloseModal from "../img/cerrar.svg";

const GenericModal = ({
    setGenericModal,
    modalAnimation,
    setModalAnimation,
    event,
    setModalMsg,
    modalMsg,
    children,
}) => {
    const closeModal = () => {
        setModalAnimation(false);

        setTimeout(() => {
            setGenericModal(false);
        }, 500);
    };

    const handleSubmit = (e) => {
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
                    <legend>Resetear App</legend>
                    <p>{children}</p>

                    <div className="botones">
                        <button className="warning" onClick={() => event(true)}>
                            Si
                        </button>
                        <button onClick={() => event(false)}>No</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GenericModal;
