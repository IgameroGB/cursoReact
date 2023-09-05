import React from "react";
import NewBudget from "./NewBudget";
import BudgetController from "./BudgetController";

const Header = ({
    costsList,
    setCostsList,
    budget,
    setBudget,
    isValidBudget,
    setIsValidBudget,
    setEditBudgetModal,
    newBudget,
    setNewBudget,
    setModalAnimation,
    genericModalResult,
    setGenericModal,
}) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>
            {isValidBudget ? (
                <BudgetController
                    costsList={costsList}
                    setCostsList={setCostsList}
                    budget={budget}
                    setBudget={setBudget}
                    setEditBudgetModal={setEditBudgetModal}
                    newBudget={newBudget}
                    setNewBudget={setNewBudget}
                    setModalAnimation={setModalAnimation}
                    genericModalResult={genericModalResult}
                    setGenericModal={setGenericModal}
                    setIsValidBudget={setIsValidBudget}
                />
            ) : (
                <NewBudget
                    budget={budget}
                    setBudget={setBudget}
                    setIsValidBudget={setIsValidBudget}
                />
            )}
        </header>
    );
};

export default Header;
