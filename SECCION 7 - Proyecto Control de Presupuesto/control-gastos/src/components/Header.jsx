import React from "react";
import NewBudget from "./NewBudget";
import BudgetController from "./BudgetController";

const Header = ({
    costsList,
    budget,
    setBudget,
    isValidBudget,
    setIsValidBudget,
}) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>
            {isValidBudget ? (
                <BudgetController costsList={costsList} budget={budget} />
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
