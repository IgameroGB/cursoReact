import Cost from "./Cost";

const CostList = ({
    costsList,
    setCostEdit,
    deleteCost,
    filter,
    filterCosts,
}) => {
    const tempFilter = filter.toUpperCase();

    return (
        <div className="listado-gastos contenedor">
            {filter ? (
                <>
                    <h2>
                        {filterCosts.length
                            ? `Gastos en ${tempFilter}`
                            : `Aún no hay gastos en la categoría ${tempFilter}`}
                    </h2>
                    {filterCosts.map((cost) => (
                        <Cost
                            key={cost.costId}
                            cost={cost}
                            setCostEdit={setCostEdit}
                            deleteCost={deleteCost}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2>{costsList.length ? "Gastos" : "Aún no hay Gastos"}</h2>
                    {costsList.map((cost) => (
                        <Cost
                            key={cost.costId}
                            cost={cost}
                            setCostEdit={setCostEdit}
                            deleteCost={deleteCost}
                        />
                    ))}
                </>
            )}
        </div>
    );
};

export default CostList;
