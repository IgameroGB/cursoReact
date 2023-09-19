import { getClient } from "../data/Clientes";
export async function loader({ params }) {
    const { clientId } = params;
    const client = await getClient(clientId);
    if (Object.values(client).length === 0) {
        throw new Response("", {
            status: 404,
            statusText: "El cliente no fue encontrado :(",
        });
    }
    // console.log(params);
    const { id, name, phone, email, company } = client;
    return client;
}

function EditClient() {
    return <div>EditClient</div>;
}

export default EditClient;
