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
