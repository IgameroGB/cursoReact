import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import PatientsList from "./components/PatientsList";

function App() {
    const [patients, setPatients] = useState([]);
    const [patient, setPatient] = useState({});

    // const someValue = (val) => {
    //   console.log(val);
    // };
    return (
        <div className="container mx-auto mt-20">
            <Header
            // numbers={[1, 2, 3, 4, 5]}
            // leters={["a", "b", " c"]}
            // someValue={someValue}
            />
            <div className="mt-12 md:flex">
                <Form
                    patients={patients}
                    setPatients={setPatients}
                    patient={patient}
                    setPatient={setPatient}
                />
                <PatientsList patients={patients} setPatient={setPatient} />
            </div>
        </div>
    );
}

export default App;
