import { useState, useEffect } from "react";

import Header from "./components/Header";
import Filter from "./components/Filter";
import CostList from "./components/CostList";
import NewCostModal from "./components/NewCostModal";
import EditBudgetModal from "./components/EditBudgetModal";

import { generateRandomId } from "./helpers";

import AddCostIco from "./img/nuevo-gasto.svg";
import GenericModal from "./components/GenericModal";

function App() {
    // const initialCostListState = () =>
    //     localStorage.getItem("costList")
    //         ? JSON.parse(localStorage.getItem("costList"))
    //         : [];

    const initialCostListState = () =>
        JSON.parse(localStorage.getItem("costList")) || [];

    const [costsList, setCostsList] = useState(initialCostListState);

    const [budget, setBudget] = useState(
        Number(localStorage.getItem("budget")) ?? ""
    );
    const [isValidBudget, setIsValidBudget] = useState(false);

    const [costEdit, setCostEdit] = useState({});

    const [filter, setFilter] = useState("");
    const [filterCosts, setFilterCosts] = useState([]);

    const [modal, setModal] = useState(false);
    const [modalAnimation, setModalAnimation] = useState(false);

    const [editBudgetModal, setEditBudgetModal] = useState(false);
    const [newBudget, setNewBudget] = useState(budget);

    const [genericModal, setGenericModal] = useState(false);
    const [genericModalResult, setGenericModalResult] = useState(false);

    useEffect(() => {
        if (Object.keys(costEdit).length > 0) {
            // console.log("Editando...");
            // console.log("costEdit tiene algo");
            handleEditCost();
        }
    }, [costEdit]);

    useEffect(() => {
        localStorage.setItem("budget", budget ?? "");
    }, [budget]);

    useEffect(() => {
        localStorage.setItem("costList", JSON.stringify(costsList));
    }, [costsList]);

    useEffect(() => {
        const localStorageBudget = Number(localStorage.getItem("budget"));
        if (localStorageBudget > 0) {
            setIsValidBudget(true);
        }
    }, []);

    useEffect(() => {
        if (filter) {
            // console.log("Filtrando  ", filter);
            // Filtrar gastos por categoria

            const filterCosts = costsList.filter(
                (cost) => cost.costCategory == filter
            );
            setFilterCosts(filterCosts);
        }
    }, [filter]);

    useEffect(() => {
        // Reset APP
        if (genericModalResult) {
            console.log("reset");
            setCostsList([]);
            setBudget("");
            setIsValidBudget(false);
        }

        // console.log(genericModalResult);
        console.log(isValidBudget);
    }, [genericModalResult]);

    const handleNewCost = () => {
        setModal(true);
        setCostEdit({});

        setTimeout(() => {
            setModalAnimation(true);
            setCostEdit({});
        }, 250);
    };
    const handleEditCost = () => {
        setModal(true);

        setTimeout(() => {
            setModalAnimation(true);
            setCostEdit({});
        }, 250);
    };

    const closeModal = () => {
        setModalAnimation(false);
        setTimeout(() => {
            setModal(false);
        }, 500);
    };

    const saveCost = (cost) => {
        // console.log(cost);
        if (cost.costId) {
            // Actualizar gasto
            const updatedCostsList = costsList.map((eachCost) =>
                // Map genera un nuevo array. En este CacheStorage, copiamos el array de gastos y en caso de ser el gasto recorrido, lo sustituimos
                eachCost.costId === cost.costId ? cost : eachCost
            );
            setCostsList(updatedCostsList);
        } else {
            // Nuevo gaasto
            cost.costId = generateRandomId();
            cost.costDate = Date.now();
            setCostsList([...costsList, cost]);
        }
        closeModal();
    };

    const deleteCost = (costId) => {
        // console.log("Eliminando " + costId);
        const updatedCostList = costsList.filter(
            (cost) => cost.costId !== costId // Retorna todos menos el que coincide con el que pasamos
        );
        setCostsList(updatedCostList);
    };

    return (
        <div className={modal ? "fijar" : ""}>
            <Header
                costsList={costsList}
                setCostsList={setCostsList}
                budget={budget}
                setBudget={setBudget}
                isValidBudget={isValidBudget}
                setIsValidBudget={setIsValidBudget}
                setEditBudgetModal={setEditBudgetModal}
                newBudget={newBudget}
                setNewBudget={setNewBudget}
                setModalAnimation={setModalAnimation}
                genericModalResult={genericModalResult}
                setGenericModal={setGenericModal}
                genericModal={genericModal}
            />
            {isValidBudget && (
                <>
                    <main>
                        <Filter filter={filter} setFilter={setFilter} />
                        <CostList
                            costsList={costsList}
                            setCostEdit={setCostEdit}
                            deleteCost={deleteCost}
                            filter={filter}
                            filterCosts={filterCosts}
                        ></CostList>
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
                    costEdit={costEdit}
                    setCostEdit={setCostEdit}
                />
            )}

            {editBudgetModal && (
                <EditBudgetModal
                    setEditBudgetModal={setEditBudgetModal}
                    modalAnimation={modalAnimation}
                    setModalAnimation={setModalAnimation}
                    budget={budget}
                    setBudget={setBudget}
                    newBudget={newBudget}
                    setNewBudget={setNewBudget}
                />
            )}

            {genericModal && (
                <GenericModal
                    setGenericModal={setGenericModal}
                    modalAnimation={modalAnimation}
                    setModalAnimation={setModalAnimation}
                    event={setGenericModalResult}
                >
                    ¿Estas seguro que quieres resetear la App? <br /> Esta
                    accion es permanente
                </GenericModal>
            )}
        </div>
    );
}

export default App;
