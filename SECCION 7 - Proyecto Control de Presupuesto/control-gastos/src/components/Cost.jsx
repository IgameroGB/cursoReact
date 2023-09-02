import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

import { formatNumberToEUR, formatDate } from "../helpers";

import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";

const icons = {
    ahorro: IconoAhorro,
    comida: IconoComida,
    hogar: IconoCasa,
    varios: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones,
};

const Cost = ({ cost }) => {
    const { costName, costCuantity, costCategory, costId, costDate } = cost;

    const leadingActions = () => {
        console.log("Editar...");
    };

    const trailingActions = () => {
        console.log("Eliminar...");
    };
    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions}
                trailingActions={trailingActions}
            >
                <div className="gasto sombra">
                    <div className="contenido-gasto">
                        <img
                            src={icons[costCategory]}
                            alt={`Icono categoria ${costCategory}`}
                        />
                        <div className="descripcion-gasto">
                            <p className="categoria">{costCategory}</p>
                            <p className="nombre-gasto">{costName}</p>
                            <p className="fecha-gasto">
                                Añadido el: {""}
                                <span>{formatDate(costDate)}</span>
                            </p>
                        </div>
                    </div>
                    <p className="cantidad-gasto">
                        {formatNumberToEUR(costCuantity)}
                    </p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    );
};

export default Cost;
