import { useState } from "react";

import Header from "./components/Header";
import CostList from "./components/CostList";
import NewCostModal from "./components/NewCostModal";

import { generateRandomId } from "./helpers";

import AddCostIco from "./img/nuevo-gasto.svg";

function App() {
    const [costsList, setCostsList] = useState([]);

    const [budget, setBudget] = useState("");
    const [isValidBudget, setIsValidBudget] = useState(false);

    const [modal, setModal] = useState(false);
    const [modalAnimation, setModalAnimation] = useState(false);

    const handleNewCost = () => {
        setModal(true);

        setTimeout(() => {
            setModalAnimation(true);
        }, 250);
    };

    const saveCost = (cost) => {
        // console.log(cost);
        cost.costId = generateRandomId();
        cost.costDate = Date.now();
        setCostsList([...costsList, cost]);

        setModalAnimation(false);
        setTimeout(() => {
            setModal(false);
        }, 500);
    };

    return (
        <div className={modal ? "fijar" : ""}>
            <Header
                costsList={costsList}
                budget={budget}
                setBudget={setBudget}
                isValidBudget={isValidBudget}
                setIsValidBudget={setIsValidBudget}
            />
            {isValidBudget && (
                <>
                    <main>
                        <CostList costsList={costsList}></CostList>
                    </main>
                    <div className="nuevo-gasto">
                        <img
                            src={AddCostIco}
                            alt="icono nuevo gasto"
                            onClick={handleNewCost}
                        />
                    </div>
                </>
            )}

            {modal && (
                <NewCostModal
                    setModal={setModal}
                    modalAnimation={modalAnimation}
                    setModalAnimation={setModalAnimation}
                    saveCost={saveCost}
                />
            )}
        </div>
    );
}

export default App;
