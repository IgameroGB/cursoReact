import Cost from "./Cost";

const CostList = ({ costsList }) => {
    return (
        <div className="listado-gastos contenedor">
            <h2>{costsList.length ? "Gastos" : "Aún no hay Gastos"}</h2>
            {costsList.map((cost) => (
                <Cost key={cost.costId} cost={cost} />
            ))}
        </div>
    );
};

export default CostList;
